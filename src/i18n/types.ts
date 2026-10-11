import layout from "./messages/cs/layout.json";
import landing from "./messages/cs/landing.json";
import offer from "./messages/cs/offer.json";
import references from "./messages/cs/references.json";
import steps from "./messages/cs/steps.json";
import about from "./messages/cs/about.json";
import contact from "./messages/cs/contact.json";

// čeština je zdrojová verze, ostatní jazyky musí mít stejnou strukturu
export type Messages = typeof layout &
  typeof landing &
  typeof offer &
  typeof references &
  typeof steps &
  typeof about &
  typeof contact;
