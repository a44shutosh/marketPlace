import { Admin as TAdmin } from "../api/admin/Admin";

export const ADMIN_TITLE_FIELD = "adminRole";

export const AdminTitle = (record: TAdmin): string => {
  return record.adminRole?.toString() || String(record.id);
};
