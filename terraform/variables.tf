variable "project_id" {
  type = string
}

variable "region" {
  type    = string
  default = "asia-south1"
}

variable "service_name" {
  type = string
}

variable "image_uri" {
  type = string
}

variable "github_owner" {
  type = string
}

variable "github_repo" {
  type = string
}

variable "container_port" {
  type    = number
  default = 8080
}

variable "cpu" {
  type    = string
  default = "1"
}

variable "memory" {
  type    = string
  default = "512Mi"
}

variable "min_instance_count" {
  type    = number
  default = 0
}

variable "max_instance_count" {
  type    = number
  default = 3
}

variable "allow_unauthenticated" {
  type    = bool
  default = false
}

variable "runtime_env" {
  type    = map(string)
  default = {}
}