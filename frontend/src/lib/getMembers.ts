import { Member } from "@/types/member";
import { members } from "@/data/members";

export function getMembers(): Member[] {
  return members;
}
