variable "project_id" {
  type = string
}

variable "region" {
  type = string
}

variable "service_name" {
  type = string
}

variable "service_account_email" {
  type = string
}

variable "image_uri" {
  type = string
}

variable "container_port" {
  type = number
}

variable "cpu" {
  type = string
}

variable "memory" {
  type = string
}

variable "min_instance_count" {
  type = number
}

variable "max_instance_count" {
  type = number
}

variable "allow_unauthenticated" {
  type = bool
}

variable "runtime_env" {
  type = map(string)
}