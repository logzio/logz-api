import React from "react";
import CodeBlock from "@theme/CodeBlock";
/* eslint-disable import/no-extraneous-dependencies*/
import clsx from "clsx";
import { createDescription } from "docusaurus-theme-openapi-docs/lib/markdown/createDescription";
/* eslint-disable import/no-extraneous-dependencies*/
import { guard } from "docusaurus-theme-openapi-docs/lib/markdown/utils";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import "./_SchemaItem.css";

/* small pill */
function PlanBadge({ plan }) {
  if (!plan) return null;
  const safe = String(plan).toLowerCase().replace(/[^a-z0-9-]/g, "");
  const label =
    safe === "time-based" ? "Time-based"
    : safe === "consumption" ? "Consumption"
    : String(plan);
  return <span className={`plan-badge plan-${safe}`}>{label}</span>;
}

function SchemaItem({
  children: collapsibleSchemaContent,   // nested schema UI from the theme
  collapsible,                          // unused on purpose; we always render header + desc
  name,
  qualifierMessage,
  required,
  schemaName,
  schema,
}) {
  let deprecated = false;
  let schemaDescription = null;
  let defaultValue;
  let nullable = false;
  let plan = null;

  if (schema) {
    deprecated = schema.deprecated ?? false;
    defaultValue = schema.default;
    // nullable may be OAS3 `nullable` or OAS2 `x-nullable`
    nullable = (schema.nullable ?? schema["x-nullable"]) ?? false;

    // description can live under multiple keys depending on generators
    schemaDescription =
      schema.description ??
      schema.markdownDescription ??
      schema["x-description"] ??
      schema.extensions?.["x-description"] ??
      null;

    // vendor extension for the pill
    plan =
      schema["x-plan"] ??
      schema.extensions?.["x-plan"] ??
      schema["x_plan"] ??
      schema["xPlan"] ??
      null;
  }

  const renderRequired = guard(
    Array.isArray(required) ? required.includes(name) : required,
    () => <span className="openapi-schema__required">required</span>
  );

  const renderDeprecated = guard(deprecated, () => (
    <span className="openapi-schema__deprecated">deprecated</span>
  ));

  const renderNullable = guard(nullable, () => (
    <span className="openapi-schema__nullable">nullable</span>
  ));

  const renderSchemaDescription = guard(schemaDescription, (description) => (
    <div>
      <ReactMarkdown
        children={createDescription(description)}
        components={{
          pre: "div",
          code({ inline, className, children }) {
            const match = /language-(\w+)/.exec(className || "");
            if (inline) return <code>{children}</code>;
            return !inline && match ? (
              <CodeBlock className={className}>{children}</CodeBlock>
            ) : (
              <CodeBlock>{children}</CodeBlock>
            );
          },
        }}
        rehypePlugins={[rehypeRaw]}
      />
    </div>
  ));

  const renderQualifierMessage = guard(qualifierMessage, (message) => (
    <div>
      <ReactMarkdown
        children={createDescription(message)}
        rehypePlugins={[rehypeRaw]}
      />
    </div>
  ));

  const renderDefaultValue = guard(
    typeof defaultValue === "boolean" ? defaultValue.toString() : defaultValue,
    (value) => (
      <div>
        <ReactMarkdown children={`**Default value:** \`${value}\``} />
      </div>
    )
  );

  const schemaContent = (
    <div>
      <span className="openapi-schema__container">
        <strong
          className={clsx("openapi-schema__property", {
            "openapi-schema__strikethrough": deprecated,
          })}
        >
          {name}
        </strong>
        <PlanBadge plan={plan} />
        <span className="openapi-schema__name"> {schemaName}</span>
        {(nullable || required || deprecated) && (
          <span className="openapi-schema__divider"></span>
        )}
        {renderNullable}
        {!deprecated && renderRequired}
        {renderDeprecated}
      </span>

      {renderQualifierMessage}
      {renderDefaultValue}
      {renderSchemaDescription}

      {/* Always show nested schema after the description */}
      {collapsibleSchemaContent}
    </div>
  );

  // IMPORTANT: never switch to only children; that hides description/name on nested objects
  return <div className="openapi-schema__list-item">{schemaContent}</div>;
}

export default SchemaItem;
