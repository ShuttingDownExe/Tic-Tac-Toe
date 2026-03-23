module "bootstrap" {
  source = "./modules/bootstrap"

  project_id    = var.project_id
  github_owner  = var.github_owner
  github_repo   = var.github_repo
}

module "cloud_run" {
  source = "./modules/cloud_run"

  project_id               = var.project_id
  region                   = var.region
  service_name             = var.service_name
  service_account_email    = module.bootstrap.cloud_run_service_account_email
  image_uri                = var.image_uri
  container_port           = var.container_port
  cpu                      = var.cpu
  memory                   = var.memory
  min_instance_count       = var.min_instance_count
  max_instance_count       = var.max_instance_count
  runtime_env              = var.runtime_env
  allow_unauthenticated    = var.allow_unauthenticated
}