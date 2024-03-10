import { Handshake, Home, Phone, User } from "lucide-react";

export const NAVIGATION = [
  {
    path: "/",
    icon: <Home />,
    name: "Início",
  },
  {
    path: "/sobre",
    icon: <User />,
    name: "Sobre",
  },
  {
    path: "/servicos",
    icon: <Handshake />,
    name: "Serviços",
  },
  {
    path: "/contato",
    icon: <Phone />,
    name: "Contato",
  },
];
