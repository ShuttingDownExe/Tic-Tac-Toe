project_id      = "devopslearn-477411"
region          = "asia-south1"
service_name    = "tictactoe-frontend"
github_owner    = "ShuttingDownExe"
github_repo     = "Tic-Tac-Toe"

image_uri       = "rishithkumar/tictactoe-frontend:dev-2026.03.23.112206"

container_port        = 8080
cpu                   = "1"
memory                = "512Mi"
min_instance_count    = 0
max_instance_count    = 3
allow_unauthenticated = true

runtime_env = {
  NODE_ENV = "production"
}