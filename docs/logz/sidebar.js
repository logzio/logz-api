module.exports = [{"type":"doc","id":"logz/logz-io-api"},{"type":"category","label":"Search logs","link":{"type":"doc","id":"logz/search-logs"},"items":[{"type":"doc","id":"logz/search","label":"Search logs","className":"api-method post"},{"type":"doc","id":"logz/scroll","label":"Scroll logs","className":"api-method post"}]},{"type":"category","label":"Alerts","link":{"type":"doc","id":"logz/alerts"},"items":[{"type":"doc","id":"logz/get-all-alerts","label":"Retrieve all alerts","className":"api-method get"},{"type":"doc","id":"logz/create-alert","label":"Create an alert","className":"api-method post"},{"type":"doc","id":"logz/get-alert","label":"Retrieve alert by ID","className":"api-method get"},{"type":"doc","id":"logz/update-alert","label":"Update an alert","className":"api-method put"},{"type":"doc","id":"logz/delete-alert","label":"Delete an alert","className":"api-method delete"},{"type":"doc","id":"logz/enable-alert","label":"Enable alert by ID","className":"api-method post"},{"type":"doc","id":"logz/disable-alert","label":"Disable alert by ID","className":"api-method post"},{"type":"doc","id":"logz/triggered-alerts","label":"Retrieve triggered alerts","className":"api-method post"}]},{"type":"category","label":"Deployments","link":{"type":"doc","id":"logz/deployments"},"items":[{"type":"doc","id":"logz/create-markers","label":"Add deployment markers to Exception graphs","className":"api-method post"}]},{"type":"category","label":"Insights","link":{"type":"doc","id":"logz/insights"},"items":[{"type":"doc","id":"logz/get-public-insights","label":"Get the list of Insights","className":"api-method post"}]},{"type":"category","label":"Logz.io snapshots","link":{"type":"doc","id":"logz/logz-io-snapshots"},"items":[{"type":"doc","id":"logz/create-snapshot","label":"Create a snapshot","className":"api-method post"},{"type":"doc","id":"logz/get-snapshot","label":"Retrieve a snapshot by ID","className":"api-method get"}]},{"type":"category","label":"Security account","link":{"type":"doc","id":"logz/security-account"},"items":[{"type":"doc","id":"logz/post-siem","label":"Create SIEM account","className":"api-method post"}]},{"type":"category","label":"Security rules","link":{"type":"doc","id":"logz/security-rules"},"items":[{"type":"doc","id":"logz/create-security-rule","label":"Create a security rule","className":"api-method post"},{"type":"doc","id":"logz/get-security-rule","label":"Retrieve a security rule","className":"api-method get"},{"type":"doc","id":"logz/update-security-rule","label":"Update a security rule","className":"api-method put"},{"type":"doc","id":"logz/delete-security-rule","label":"Delete a security rule","className":"api-method delete"},{"type":"doc","id":"logz/search-account-security-rules","label":"Retrieve security rules","className":"api-method post"},{"type":"doc","id":"logz/enable-security-rule","label":"Enable a rule","className":"api-method post"},{"type":"doc","id":"logz/disable-security-rule","label":"Disable a rule","className":"api-method post"},{"type":"doc","id":"logz/bulk-update-security-rule","label":"Bulk update security rules","className":"api-method post"},{"type":"doc","id":"logz/bulk-delete-security-rule","label":"Bulk delete security rules","className":"api-method post"}]},{"type":"category","label":"Security events","link":{"type":"doc","id":"logz/security-events"},"items":[{"type":"doc","id":"logz/search-security-rules-events","label":"Fetch security events","className":"api-method post"},{"type":"doc","id":"logz/edit-security-rules-events","label":"Edit security events","className":"api-method put"},{"type":"doc","id":"logz/search-security-rule-event-logs","label":"Fetch the logs that triggered a security event","className":"api-method post"}]},{"type":"category","label":"Lookup lists","items":[{"type":"doc","id":"logz/create-lookup-list","label":"Create lookup list","className":"api-method post"},{"type":"doc","id":"logz/search-lookup-lists","label":"Get all/Search lookup lists","className":"api-method post"},{"type":"doc","id":"logz/get-lookup-list","label":"Get lookup by ID","className":"api-method get"},{"type":"doc","id":"logz/update-lookup-list","label":"Update lookup list","className":"api-method put"},{"type":"doc","id":"logz/delete-lookup-list","label":"Delete lookup list","className":"api-method delete"},{"type":"doc","id":"logz/create-lookup-list-element","label":"Add element to a lookup list","className":"api-method post"},{"type":"doc","id":"logz/search-lookup-list-elements","label":"Get all/Search lookup elements","className":"api-method post"},{"type":"doc","id":"logz/get-lookup-list-element","label":"Get element","className":"api-method get"},{"type":"doc","id":"logz/update-lookup-list-element","label":"Update element","className":"api-method put"},{"type":"doc","id":"logz/delete-lookup-list-element","label":"Delete element","className":"api-method delete"},{"type":"doc","id":"logz/add-lookup-list-elements","label":"Add elements in bulk","className":"api-method post"}]},{"type":"category","label":"Manage users","link":{"type":"doc","id":"logz/manage-users"},"items":[{"type":"doc","id":"logz/list-all-account-users","label":"Retrieve users in all associated accounts","className":"api-method get"},{"type":"doc","id":"logz/list-users","label":"Retrieve all users","className":"api-method get"},{"type":"doc","id":"logz/create-user","label":"Create a user","className":"api-method post"},{"type":"doc","id":"logz/get-user","label":"Retrieve a user by ID","className":"api-method get"},{"type":"doc","id":"logz/update-user","label":"Update a user","className":"api-method put"},{"type":"doc","id":"logz/delete-user","label":"Delete a user","className":"api-method delete"},{"type":"doc","id":"logz/delete-user-recursively","label":"Delete a user from all accounts","className":"api-method delete"},{"type":"doc","id":"logz/suspend-user","label":"Suspend a user","className":"api-method post"},{"type":"doc","id":"logz/unsuspend-user","label":"Unsuspend a user","className":"api-method post"},{"type":"doc","id":"logz/suspend-user-recursively","label":"Suspend a user from all accounts","className":"api-method put"},{"type":"doc","id":"logz/unsuspend-user-recursively","label":"Unsuspend a user from all accounts","className":"api-method put"}]},{"type":"category","label":"Manage metrics account","items":[{"type":"doc","id":"logz/create-a-new-metrics-account","label":"Create a new metrics account","className":"api-method post"},{"type":"doc","id":"logz/get-a-list-of-all-metrics-accounts","label":"Get a list of all metrics accounts","className":"api-method get"},{"type":"doc","id":"logz/update-a-metrics-account","label":"Update a metrics account","className":"api-method put"},{"type":"doc","id":"logz/delete-a-metrics-account","label":"Delete a metrics account","className":"api-method delete"},{"type":"doc","id":"logz/get-a-specific-metrics-account","label":"Get a specific metrics account","className":"api-method get"}]},{"type":"category","label":"Authentication groups","link":{"type":"doc","id":"logz/authentication-groups"},"items":[{"type":"doc","id":"logz/get-auth-groups","label":"Get authentication groups","className":"api-method get"},{"type":"doc","id":"logz/set-auth-groups","label":"Create/update authentication groups","className":"api-method post"}]},{"type":"category","label":"Associated accounts","link":{"type":"doc","id":"logz/get-related-accounts"},"items":[{"type":"doc","id":"logz/get-related-accounts","label":"Get a list of all accounts derived from the accountId","className":"api-method get"}]}, {"type":"category","label":"Who am I","link":{"type":"doc","id":"logz/who-am-i"},"items":[{"type":"doc","id":"logz/who-am-i","label":"Retrieve account information","className":"api-method get"}]},{"type":"category","label":"Manage time-based log accounts","link":{"type":"doc","id":"logz/manage-time-based-log-accounts"},"items":[{"type":"doc","id":"logz/get-all","label":"Retrieve settings for all accounts","className":"api-method get"},{"type":"doc","id":"logz/create-time-based-account","label":"Create a sub account","className":"api-method post"},{"type":"doc","id":"logz/get","label":"Retrieve account settings by ID","className":"api-method get"},{"type":"doc","id":"logz/update-time-based-account","label":"Update an account","className":"api-method put"},{"type":"doc","id":"logz/delete-time-based-account","label":"Delete a sub account","className":"api-method delete"},{"type":"doc","id":"logz/get-all-detailed-time-based-account","label":"Retrieve detailed information for all accounts","className":"api-method get"},{"type":"doc","id":"logz/get-detailed-time-based-account","label":"Retrieve detailed account information by account ID","className":"api-method get"}]},{"type":"category","label":"Manage shared tokens","link":{"type":"doc","id":"logz/manage-shared-tokens"},"items":[{"type":"doc","id":"logz/get-all-filters","label":"Retrieve all shared token filters","className":"api-method get"},{"type":"doc","id":"logz/create-filter","label":"Create a shared token filter","className":"api-method post"},{"type":"doc","id":"logz/get-filter","label":"Retrieve a shared token filter by ID","className":"api-method get"},{"type":"doc","id":"logz/delete-filter","label":"Delete a shared token filter","className":"api-method delete"},{"type":"doc","id":"logz/get-token","label":"Retrieve a shared token by ID","className":"api-method get"},{"type":"doc","id":"logz/update-token","label":"Update a shared token","className":"api-method put"},{"type":"doc","id":"logz/delete-token","label":"Delete a shared token","className":"api-method delete"},{"type":"doc","id":"logz/get-all-tokens","label":"Retrieve all shared tokens","className":"api-method get"},{"type":"doc","id":"logz/create-token","label":"Create a shared token","className":"api-method post"}]},{"type":"category","label":"Manage API tokens","link":{"type":"doc","id":"logz/manage-api-tokens"},"items":[{"type":"doc","id":"logz/create-api-token-request","label":"Create a sub account API token.","className":"api-method post"}]},{"type":"category","label":"Manage notification endpoints","link":{"type":"doc","id":"logz/manage-notification-endpoints"},"items":[{"type":"doc","id":"logz/create-slack","label":"Create a Slack endpoint","className":"api-method post"},{"type":"doc","id":"logz/update-slack","label":"Update Slack endpoint","className":"api-method put"},{"type":"doc","id":"logz/create-custom","label":"Create a custom notification endpoint","className":"api-method post"},{"type":"doc","id":"logz/update-custom","label":"Update a custom notification endpoint","className":"api-method put"},{"type":"doc","id":"logz/create-pager-duty","label":"Create a PagerDuty endpoint","className":"api-method post"},{"type":"doc","id":"logz/update-pager-duty","label":"Update a PagerDuty endpoint","className":"api-method put"},{"type":"doc","id":"logz/create-big-panda","label":"Create a BigPanda endpoint","className":"api-method post"},{"type":"doc","id":"logz/update-big-panda","label":"Update a BigPanda endpoint","className":"api-method put"},{"type":"doc","id":"logz/create-data-dog","label":"Create a Datadog endpoint","className":"api-method post"},{"type":"doc","id":"logz/update-data-dog","label":"Update a Datadog endpoint","className":"api-method put"},{"type":"doc","id":"logz/create-victorops","label":"Create a VictorOps endpoint","className":"api-method post"},{"type":"doc","id":"logz/update-victorops","label":"Update a VictorOps endpoint","className":"api-method put"},{"type":"doc","id":"logz/get-endpoint-by-id","label":"Retrieve an endpoint by ID","className":"api-method get"},{"type":"doc","id":"logz/delete-endpoint","label":"Delete an endpoint","className":"api-method delete"},{"type":"doc","id":"logz/get-all-endpoints","label":"Retrieve all notification endpoints","className":"api-method get"},{"type":"doc","id":"logz/create-ops-genie","label":"Create an OpsGenie endpoint","className":"api-method post"},{"type":"doc","id":"logz/update-ops-genie","label":"Update an OpsGenie endpoint","className":"api-method put"},{"type":"doc","id":"logz/create-service-now","label":"Create an ServiceNow endpoint","className":"api-method post"},{"type":"doc","id":"logz/update-service-now","label":"Update an ServiceNow endpoint","className":"api-method put"},{"type":"doc","id":"logz/create-microsoft-teams","label":"Create an  Microsoft Teams endpoint","className":"api-method post"},{"type":"doc","id":"logz/update-microsoft-teams","label":"Update an Microsoft Teams endpoint","className":"api-method put"}]},{"type":"category","label":"Import or export Kibana objects","link":{"type":"doc","id":"logz/import-or-export-kibana-objects"},"items":[{"type":"doc","id":"logz/export-saved-objects","label":"Export Kibana objects","className":"api-method post"},{"type":"doc","id":"logz/import-saved-objects","label":"Import Kibana objects","className":"api-method post"}]},{"type":"category","label":"Manage log shipping tokens","link":{"type":"doc","id":"logz/manage-log-shipping-tokens"},"items":[{"type":"doc","id":"logz/create-new-log-shipping-token","label":"Create a log shipping token","className":"api-method post"},{"type":"doc","id":"logz/get-log-shipping-token-by-id","label":"Retrieve a log shipping token by ID","className":"api-method get"},{"type":"doc","id":"logz/update-log-shipping-token","label":"Update a log shipping token","className":"api-method put"},{"type":"doc","id":"logz/delete-log-shipping-token","label":"Delete a log shipping token","className":"api-method delete"},{"type":"doc","id":"logz/get-log-shipping-tokens-limits","label":"Get number of available tokens","className":"api-method get"},{"type":"doc","id":"logz/search-log-shipping-tokens","label":"Retrieve log shipping tokens","className":"api-method post"}]},{"type":"category","label":"Drop filters","link":{"type":"doc","id":"logz/drop-filters"},"items":[{"type":"doc","id":"logz/get-all-for-account","label":"Retrieve drop filters","className":"api-method post"},{"type":"doc","id":"logz/activate","label":"Activate a drop filter","className":"api-method post"},{"type":"doc","id":"logz/deactivate","label":"Deactivate a drop filter","className":"api-method post"},{"type":"doc","id":"logz/delete","label":"Delete a drop filter","className":"api-method delete"},{"type":"doc","id":"logz/create","label":"Create drop filter","className":"api-method post"}]},{"type":"category","label":"Archive logs","link":{"type":"doc","id":"logz/archive-logs"},"items":[{"type":"doc","id":"logz/get-settings-for-account","label":"Retrieve archiving settings","className":"api-method get"},{"type":"doc","id":"logz/create-settings","label":"Set up archiving","className":"api-method post"},{"type":"doc","id":"logz/test-settings","label":"Test archive settings","className":"api-method post"},{"type":"doc","id":"logz/get-settings","label":"Retrieve archive settings","className":"api-method get"},{"type":"doc","id":"logz/update-settings","label":"Update archive settings","className":"api-method put"},{"type":"doc","id":"logz/delete-settings","label":"Delete archive settings","className":"api-method delete"}]},{"type":"category","label":"Restore logs","link":{"type":"doc","id":"logz/restore-logs"},"items":[{"type":"doc","id":"logz/get-restore-requests-for-account-api","label":"Retrieve all restore operations","className":"api-method get"},{"type":"doc","id":"logz/create-restore","label":"Initiate restore operation","className":"api-method post"},{"type":"doc","id":"logz/get-restore-request-by-id-api","label":"Get an update on a restore operation","className":"api-method get"},{"type":"doc","id":"logz/abort-restore-request-api","label":"Delete a restore operation","className":"api-method delete"}]},{"type":"category","label":"Parsing","items":[{"type":"doc","id":"logz/get-sawmill-test-type","label":"Parse sample logs with a Sawmill pipeline","className":"api-method post"},{"type":"doc","id":"logz/get-log-type","label":"Get pipeline definition for a log type","className":"api-method get"},{"type":"doc","id":"logz/post-sawmill-mapping-file","label":"Upload an external mapping file to Logz.io storage.","className":"api-method post"},{"type":"doc","id":"logz/get-log-types","label":"Get all log types","className":"api-method get"}]},{"type":"category","label":"Delete object API","items":[{"type":"doc","id":"logz/remove-a-saved-object","label":"Remove a saved object","className":"api-method delete"}]},{"type":"category","label":"Retrieve audit trail","link":{"type":"doc","id":"logz/retrieve-audit-trail"},"items":[{"type":"doc","id":"logz/list-account-audit-trails","label":"Retrieve all event types in the audit trail","className":"api-method post"},{"type":"doc","id":"logz/list-account-audit-trails-filtered","label":"Retrieve a filtered list of audit trail events","className":"api-method post"}]},{"type":"category","label":"Connect to CloudTrail","link":{"type":"doc","id":"logz/connect-to-cloud-trail"},"items":[{"type":"doc","id":"logz/get-account-cloud-trails","label":"Retrieve all connected CloudTrail resources","className":"api-method get"},{"type":"doc","id":"logz/create-cloud-trail","label":"Create a new CloudTrail connector","className":"api-method post"},{"type":"doc","id":"logz/get-cloud-trail","label":"Retrieve CloudTrail connector by ID","className":"api-method get"},{"type":"doc","id":"logz/update-cloud-trail","label":"Update a CloudTrail connector","className":"api-method put"},{"type":"doc","id":"logz/delete-cloud-trail","label":"Delete a CloudTrail connector","className":"api-method delete"}]},{"type":"category","label":"Connect to S3 Buckets","link":{"type":"doc","id":"logz/connect-to-s-3-buckets"},"items":[{"type":"doc","id":"logz/get-s-3-buckets","label":"Retrieve all connected S3 buckets","className":"api-method get"},{"type":"doc","id":"logz/create-buckets","label":"Create a new S3 bucket connector","className":"api-method post"},{"type":"doc","id":"logz/get-s-3-bucket","label":"Retrieve an S3 bucket connector by ID","className":"api-method get"},{"type":"doc","id":"logz/update-bucket","label":"Update an S3 bucket connector","className":"api-method put"},{"type":"doc","id":"logz/delete-bucket","label":"Delete an S3 connector","className":"api-method delete"},{"type":"doc","id":"logz/get-aws-assume-role-details","label":"Get account information for IAM Role","className":"api-method get"}]},{"type":"category","label":"Get instant query","items":[{"type":"doc","id":"logz/get-instant-query","label":"Get instant query","className":"api-method get"}]},{"type":"category","label":"Get label names","items":[{"type":"doc","id":"logz/get-label-names","label":"Get label names","className":"api-method get"}]},{"type":"category","label":"Get label values","items":[{"type":"doc","id":"logz/get-label-values","label":"Get label values","className":"api-method get"}]},{"type":"category","label":"Get range query","items":[{"type":"doc","id":"logz/get-range-query","label":"Get range query","className":"api-method get"}]},{"type":"category","label":"Get series by labels","items":[{"type":"doc","id":"logz/get-series-by-labels","label":"Get series by labels","className":"api-method get"}]},{"type":"category","label":"Post instant query","items":[{"type":"doc","id":"logz/post-instant-query","label":"Post instant query","className":"api-method post"}]},{"type":"category","label":"Post label names","items":[{"type":"doc","id":"logz/post-label-names","label":"Post label names","className":"api-method post"}]},{"type":"category","label":"Post range query","items":[{"type":"doc","id":"logz/post-range-query","label":"Post range query","className":"api-method post"}]},{"type":"category","label":"Post series by labels","items":[{"type":"doc","id":"logz/post-series-by-labels","label":"Post series by labels","className":"api-method post"}]},{"type":"category","label":"Grafana get all folders","items":[{"type":"doc","id":"logz/get-all-folders","label":"Get all folders","className":"api-method get"}]},{"type":"category","label":"Grafana contact points","items":[{"type":"doc","id":"logz/route-get-contactpoints","label":"Get all contact points","className":"api-method get"},{"type":"doc","id":"logz/route-post-contactpoints","label":"Create a contact point","className":"api-method post"},{"type":"doc","id":"logz/route-delete-contactpoints","label":"Delete a contact point","className":"api-method delete"},{"type":"doc","id":"logz/route-update-contactpoints","label":"Update a contact point","className":"api-method put"},{"type":"doc","id":"logz/route-reset-policy-tree","label":"Clears the notification policy tree","className":"api-method delete"},{"type":"doc","id":"logz/route-get-policy-tree","label":"Get notification policy tree","className":"api-method get"},{"type":"doc","id":"logz/route-set-policy-tree","label":"Set notification policy tree","className":"api-method put"}]},{"type":"category","label":"Grafana data source","items":[{"type":"doc","id":"logz/get-all-datasources","label":"Return a list of data sources","className":"api-method get"},{"type":"doc","id":"logz/get-datasource-by-account","label":"Get a data source for a given account","className":"api-method get"}]},{"type":"category","label":"Grafana alerting provisioning","items":[{"type":"doc","id":"logz/get-alert-rules","label":"Return a list of all alerts","className":"api-method get"},{"type":"doc","id":"logz/alert-rules","label":"Create a new alert rule","className":"api-method post"},{"type":"doc","id":"logz/get-alert-rules-by-uid","label":"Return a list of all alerts by UID","className":"api-method get"},{"type":"doc","id":"logz/put-alert-rules-by-uid","label":"Amend an alert by UID","className":"api-method put"}]},{"type":"category","label":"Grafana silence management","items":[{"type":"doc","id":"logz/get-all-silences","label":"Return a list of all Grafana silences","className":"api-method get"}, {"type":"doc","id":"logz/create-new-silence","label":"Create a new Grafana silences","className":"api-method post"}, {"type":"doc","id":"logz/delete-silence","label":"Delete a Grafana silence","className":"api-method delete"}]},{"type":"category","label":"Grafana annotations","items":[{"type":"doc","id":"logz/delete-alert-rules-by-uid","label":"Delete alert rule by UID","className":"api-method delete"},{"type":"doc","id":"logz/get-annotations","label":"Find annotations","className":"api-method get"},{"type":"doc","id":"logz/create-annotations","label":"Create annotations","className":"api-method post"},{"type":"doc","id":"logz/create-annotations-graphite","label":"Create annotations in Graphite format","className":"api-method post"},{"type":"doc","id":"logz/update-annotations","label":"Update annotations","className":"api-method put"},{"type":"doc","id":"logz/patch-annotations","label":"Patch annotations","className":"api-method patch"},{"type":"doc","id":"logz/delete-annotations","label":"Delete annotation by id","className":"api-method delete"},{"type":"doc","id":"logz/get-annotations-tags","label":"Get event tags created in annotations","className":"api-method get"}]},{"type":"category","label":"Grafana dashboards","items":[{"type":"doc","id":"logz/create-dashboard","label":"Create/update a dashboard","className":"api-method post"},{"type":"doc","id":"logz/get-dashboar-by-id","label":"Get dashboard by uid","className":"api-method get"},{"type":"doc","id":"logz/delete-dashboar-by-id","label":"Delete dashboard by uid","className":"api-method delete"},{"type":"doc","id":"logz/get-home-dashboard","label":"Get home dashboard","className":"api-method get"},{"type":"doc","id":"logz/get-dashboard-tags","label":"Get all tags of dashboards","className":"api-method get"},{"type":"doc","id":"logz/get-all-dashboard-versions","label":"Get all dashboard versions","className":"api-method get"},{"type":"doc","id":"logz/get-dashboard-version","label":"Get dashboard version","className":"api-method get"},{"type":"doc","id":"logz/restore-dashboard","label":"Restore a dashboard","className":"api-method post"},{"type":"doc","id":"logz/compare-dashboard","label":"Compare dashboards","className":"api-method post"}]},{"type":"category","label":"Grafana dashboard search","items":[{"type":"doc","id":"logz/search-dashboard","label":"Search folders and dashboards","className":"api-method get"}]},{"type":"category","label":"Grafana snapshots","items":[{"type":"doc","id":"logz/post-grafana-snapshot","label":"Create a snapshot","className":"api-method post"},{"type":"doc","id":"logz/get-grafana-snapshot","label":"Get list of Snapshots","className":"api-method get"},{"type":"doc","id":"logz/get-grafana-snapshotby-key","label":"Get Snapshot by Key","className":"api-method get"},{"type":"doc","id":"logz/delete-grafana-snapshotby-key","label":"Delete Snapshot by Key","className":"api-method delete"},{"type":"doc","id":"logz/delete-grafana-snapshotby-delete-key","label":"Delete snapshot by deleteKey","className":"api-method get"}]}];