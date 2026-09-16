import { Service } from "@/types/service";
import { services } from "@/data/services";

export function getServices(): Service[] {
  return services;
}
