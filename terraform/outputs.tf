output "service_name" {
  value = module.cloud_run.service_name
}

output "service_uri" {
  value = module.cloud_run.service_uri
}

output "github_deployer_service_account_email" {
  value = module.bootstrap.github_deployer_service_account_email
}

output "workload_identity_provider_name" {
  value = module.bootstrap.workload_identity_provider_name
}