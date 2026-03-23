output "cloud_run_service_account_email" {
  value = google_service_account.cloud_run_sa.email
}

output "github_deployer_service_account_email" {
  value = google_service_account.github_deployer.email
}

output "workload_identity_provider_name" {
  value = google_iam_workload_identity_pool_provider.github_provider.name
}