import React from "react";

import CodeBlock from "@theme/CodeBlock";
/* eslint-disable import/no-extraneous-dependencies*/
import clsx from "clsx";
import { createDescription } from "docusaurus-theme-openapi-docs/lib/markdown/createDescription";
/* eslint-disable import/no-extraneous-dependencies*/
import { guard } from "docusaurus-theme-openapi-docs/lib/markdown/utils";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

function PlanBadge({ plan }) {
  if (!plan) return null;
  const safe = String(plan).toLowerCase().replace(/[^a-z0-9-]/g, "");
  const label =
    safe === "time-based"
      ? "Time-based"
      : safe === "consumption"
      ? "Consumption"
      : plan;
  return <span className={`plan-badge plan-${safe}`}>{label}</span>;
}

function SchemaItem({
  children: collapsibleSchemaContent,
  collapsible,
  name,
  qualifierMessage,
  required,
  schemaName,
  schema,
}) {
  let deprecated;
  let schemaDescription;
  let defaultValue;
  let nullable;
  let plan;
  if (schema) {
    deprecated = schema.deprecated;
    schemaDescription = schema.description;
    defaultValue = schema.default;
    nullable = schema.nullable;
    plan =
      schema?.['x-plan'] ??
      schema?.extensions?.['x-plan'] ??
      schema?.['x_plan'] ??
      schema?.['xPlan'] ??
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
          code({ node, inline, className, children, ...props }) {
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
      <div className="">
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
      {collapsibleSchemaContent ?? collapsibleSchemaContent}
    </div>
  );

  return (
    <div className="openapi-schema__list-item">
      <span className="openapi-schema__container">
        <strong className={clsx("openapi-schema__property", { "openapi-schema__strikethrough": deprecated })}>
          {name}
        </strong>
        <PlanBadge plan={plan} />
        <span className="openapi-schema__name"> {schemaName}</span>
        {/* ... */}
      </span>
      {/* ... */}
    </div>
  );
}

export default SchemaItem;
