import { schema } from "normalizr";

export const contact = new schema.Entity("contacts");
export const arrayOfContacts = new schema.Array(contact);
