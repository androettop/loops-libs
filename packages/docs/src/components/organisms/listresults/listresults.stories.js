import React from "react";
import { ListResults } from "@loops-ar/ui";
import simpleArgTypes from "../../../utils/argTypes";
import Doc from "./doc.mdx";
import { actions } from "../../../utils/actionLog";

export default {
  title: "Organisms / List Results",
  component: ListResults,
  argTypes: simpleArgTypes({
    /*
        "prop_name":{
            description:"prop description",
            type: "string",
            control: "text",
            defaultValue: "default value",
            required: true,
        }
    */
  }),
  parameters: {
    viewMode: "docs",
    docs: {
      page: Doc,
    },
  },
};

// We create a “template” of how args map to rendering
const Template = (args) => <ListResults {...args} />;

const sampleData = [
  {
    id: "ABCDEF",
    status: 203,
    title:
      "Jubilaciones: el aumento será del 5% y no alcanzaría a compensar la inflación del trimestre",
    description:
      "El presidente Alberto Fernández confirmó este martes el envío al Congreso del proyecto del Poder Ejecutivo sobre Interrupción Voluntaria",
    createdAt: "Creado el: 30/9/2021",
    authors: "Autor: Fulano de tal",
    updatedAt: "Modificado el: 30/9/2021",
    categories: ["Política", "Internacional"],
    img: "https://i.imgur.com/NbaYpvn.jpg",
  },
  {
    id: "GHIJK",
    status: 200,
    title:
      "Jubilaciones: el aumento será del 5% y no alcanzaría a compensar la inflación del trimestre",
    description:
      "El presidente Alberto Fernández confirmó este martes el envío al Congreso del proyecto del Poder Ejecutivo sobre Interrupción Voluntaria",
    createdAt: "Creado el: 30/9/2021",
    authors: "Autor: Fulano de tal",
    updatedAt: "Modificado el: 30/9/2021",
    categories: ["Política", "Internacional"],
    img: "https://i.imgur.com/YjF1SzY.jpg",
  },
  {
    id: "LMNOP",
    status: 404,
    title:
      "Jubilaciones: el aumento será del 5% y no alcanzaría a compensar la inflación del trimestre",
    description:
      "El presidente Alberto Fernández confirmó este martes el envío al Congreso del proyecto del Poder Ejecutivo sobre Interrupción Voluntaria",
    createdAt: "Creado el: 30/9/2021",
    authors: "Autor: Fulano de tal",
    updatedAt: "Modificado el: 30/9/2021",
    categories: ["Política", "Internacional"],
    img: "https://i.imgur.com/YjF1SzY.jpg",
  },
];

const compactCardColumns = [
  {
    name: "title",
    newRow: true,
    props: {
      maxLines: 2,
      size: 5,
    },
    type: "Heading",
  },
  {
    newRow: true,
    type: "Separator",
  },
  {
    name: "createdAt",
    newRow: true,
    props: {
      icon: "calendar",
      mode: "link",
      variant: "primary",
    },
    type: "TooltipButton",
  },
  {
    layout: {
      xs: "auto",
    },
    props: {
      icon: "edit",
      mode: "link",
      size: "large",
      title: "Editar",
      variant: "primary",
    },
    type: "TooltipButton",
  },
];

export const CompactCard = Template.bind({});

CompactCard.args = {
  data: sampleData,
  columns: compactCardColumns,
  mode: "card",
  layout: {
    xs: 12,
    sm: 6,
    md: 4,
    lg: 3,
  },
};

const normalCardColumns = [
  {
    name: "status",
    newRow: true,
    type: "StatusBadge",
  },
  {
    layout: {
      xs: "auto",
    },
    name: "id",
    props: {
      icon: "info",
      mode: "link",
      size: "large",
      variant: "neutral",
    },
    type: "CopyableButton",
  },
  {
    layout: {
      xs: {
        padding: {
          top: 2,
        },
      },
    },
    name: "title",
    newRow: true,
    props: {
      maxLines: 2,
      size: 5,
    },
    type: "Heading",
  },
  {
    layout: {
      xs: {
        padding: {
          bottom: 1,
          top: 2,
        },
      },
    },
    name: "categories",
    newRow: true,
    props: {
      type: "pill",
      variant: "info",
    },
    type: "Badge",
  },
  {
    newRow: true,
    type: "Separator",
  },
  {
    name: "createdAt",
    newRow: true,
    props: {
      icon: "calendar",
      mode: "link",
      variant: "primary",
    },
    type: "TooltipButton",
  },
  {
    layout: {
      xs: "auto",
    },
    props: {
      icon: "edit",
      mode: "link",
      size: "large",
      title: "Editar",
      variant: "primary",
    },
    type: "TooltipButton",
  },
];

export const NormalCard = Template.bind({});

NormalCard.args = {
  data: sampleData,
  columns: normalCardColumns,
  mode: "card",
  layout: {
    xs: 12,
    sm: 6,
    md: 4,
    lg: 3,
  },
};

const mediumCardColumns = [
  {
    name: "status",
    newRow: true,
    type: "StatusBadge",
  },
  {
    layout: {
      xs: {
        size: "auto",
      },
    },
    props: {
      icon: "heart",
      mode: "link",
      title: "Favoritos",
      variant: "error",
    },
    type: "TooltipButton",
  },
  {
    layout: {
      xs: {
        padding: {
          top: 2,
        },
      },
    },
    name: "title",
    newRow: true,
    props: {
      maxLines: 2,
      size: 5,
    },
    type: "Heading",
  },
  {
    newRow: true,
    type: "Separator",
  },
  {
    name: "createdAt",
    newRow: true,
    props: {
      icon: "calendar",
      mode: "link",
      variant: "primary",
    },
    type: "TooltipButton",
  },
  {
    layout: {
      xs: "auto",
    },
    props: {
      icon: "edit",
      mode: "link",
      size: "large",
      title: "Editar",
      variant: "primary",
    },
    type: "TooltipButton",
  },
];

export const MediumCard = Template.bind({});

MediumCard.args = {
  data: sampleData,
  columns: mediumCardColumns,
  mode: "card",
  imageField: "img",
  layout: {
    xs: 12,
    sm: 6,
    md: 4,
    lg: 3,
  },
};

const fullContentCardColumns = [
  {
    name: "status",
    newRow: true,
    type: "StatusBadge",
  },
  {
    layout: {
      xs: {
        padding: {
          right: 4,
        },
        size: "auto",
      },
    },
    props: {
      icon: "heart",
      mode: "link",
      title: "Favoritos",
      variant: "error",
    },
    type: "TooltipButton",
  },
  {
    layout: {
      xs: "auto",
    },
    name: "id",
    props: {
      icon: "info",
      mode: "link",
      size: "large",
      variant: "neutral",
    },
    type: "CopyableButton",
  },
  {
    layout: {
      xs: {
        padding: {
          top: 2,
        },
      },
    },
    name: "title",
    newRow: true,
    props: {
      maxLines: 2,
      size: 5,
    },
    type: "Heading",
  },
  {
    name: "description",
    newRow: true,
    props: {
      maxLines: 2,
      size: 2,
    },
    type: "Paragraph",
  },
  {
    layout: {
      xs: {
        padding: {
          bottom: 1,
          top: 2,
        },
      },
    },
    name: "categories",
    newRow: true,
    props: {
      type: "pill",
      variant: "info",
    },
    type: "Badge",
  },
  {
    newRow: true,
    type: "Separator",
  },
  {
    layout: {
      xs: {
        padding: {
          right: 4,
        },
        size: "auto",
      },
    },
    name: "authors",
    newRow: true,
    props: {
      icon: "user",
      mode: "link",
      text: "",
      variant: "primary",
    },
    type: "TooltipButton",
  },
  {
    layout: {
      xs: {
        padding: {
          right: 4,
        },
        size: "auto",
      },
    },
    name: "createdAt",
    props: {
      icon: "calendar",
      mode: "link",
      text: "",
      variant: "primary",
    },
    type: "TooltipButton",
  },
  {
    name: "updatedAt",
    props: {
      icon: "calendar",
      mode: "link",
      text: "",
      variant: "primary",
    },
    type: "TooltipButton",
  },
  {
    layout: {
      xs: "auto",
    },
    props: {
      icon: "edit",
      mode: "link",
      size: "large",
      title: "Editar",
      variant: "primary",
    },
    type: "TooltipButton",
  },
];

export const FullContentCard = Template.bind({});

FullContentCard.args = {
  data: sampleData,
  columns: fullContentCardColumns,
  mode: "card",
  imageField: "img",
  layout: {
    xs: 12,
    sm: 6,
    md: 4,
    lg: 3,
  },
};

const listAsTableColumns = [
  {
    label: "Título",
    layout: {
      xs: 5,
    },
    name: "title",
    props: {
      maxLines: 1,
      size: 5,
    },
    type: "Heading",
  },
  {
    label: "Descripción",
    layout: {
      xs: {
        padding: {
          left: 2,
          right: 2,
        },
      },
    },
    name: "description",
    props: {
      gradient: false,
      maxLines: 1,
      size: 2,
    },
    type: "Paragraph",
  },
  {
    label: "Estado",
    layout: {
      lg: 1,
      md: 3,
      sm: 2,
      xs: 3,
    },
    name: "status",
    type: "StatusBadge",
  },
  {
    label: "Editar",
    layout: {
      xs: {
        align: "right",
        size: 1,
      },
    },
    props: {
      icon: "edit",
      mode: "link",
      size: "large",
      text: "",
      title: "Editar",
      variant: "primary",
    },
    type: "TooltipButton",
  },
];

export const ListAsTable = Template.bind({});

ListAsTable.args = {
  data: sampleData,
  columns: listAsTableColumns,
  mode: "list",
  layout: {
    xs: 12,
  },
  singleRow: true,
};

const sampleListData = [
  {
    authors: "Nombre del autor",
    categories: ["Electronica", "Musica", "Drogas"],
    createdAt: "30/9/2021",
    description:
      "Treinta años de carrera, tres mil aviones, trescientas ciudades, treinta discos, millones de personas bailando con sus mezclas alrededor del mundo. Estos son algunos de los números de Hernán Cattaneo, el DJ argentino que sus colegas bautizaron como el “Messi de la música electrónica” y que hoy transita sus días de pandemia sin viajes ni fiestas multitudinarias, pero con nuevos proyectos que lo mantienen activo.",
    id: "ABCDEF",
    img: "https://i.imgur.com/YjF1SzY.jpg",
    status: 201,
    title:
      "Hernán Cattaneo y las drogas en las fiestas electrónicas: “Time Warp fue una tragedia evitable”",
    updatedAt: "30/9/2021",
  },
];

const compactListColumns = [
  {
    name: "title",
    newRow: true,
    props: {
      maxLines: 2,
      size: 5,
    },
    type: "Heading",
  },
  {
    name: "description",
    newRow: true,
    props: {
      gradient: false,
      maxLines: 2,
      size: 2,
    },
    type: "Paragraph",
  },
  {
    newRow: true,
    type: "Separator",
  },
  {
    name: "createdAt",
    newRow: true,
    props: {
      icon: "calendar",
      mode: "link",
      title: "Fecha de creación",
      variant: "primary",
    },
    type: "TooltipButton",
  },
  {
    layout: {
      xs: "auto",
    },
    props: {
      icon: "edit",
      mode: "link",
      size: "large",
      title: "Editar",
      variant: "primary",
    },
    type: "TooltipButton",
  },
];

export const CompactList = Template.bind({});

CompactList.args = {
  data: sampleListData,
  columns: compactListColumns,
  mode: "responsive",
  layout: {
    md: 12,
    sm: 6,
    xs: 12,
  },
};

const simpleListColumns = [
  {
    name: "status",
    newRow: true,
    type: "StatusBadge",
  },
  {
    layout: {
      xs: "auto",
    },
    name: "id",
    props: {
      icon: "info",
      mode: "link",
      size: "large",
      variant: "neutral",
    },
    type: "CopyableButton",
  },
  {
    layout: {
      xs: {
        padding: {
          top: 2,
        },
      },
    },
    name: "title",
    newRow: true,
    props: {
      maxLines: 2,
      size: 5,
    },
    type: "Heading",
  },
  {
    name: "description",
    newRow: true,
    props: {
      gradient: false,
      maxLines: 2,
      size: 2,
    },
    type: "Paragraph",
  },
  {
    layout: {
      xs: {
        padding: {
          bottom: 1,
          top: 2,
        },
      },
    },
    name: "categories",
    newRow: true,
    props: {
      type: "pill",
      variant: "info",
    },
    type: "Badge",
  },
  {
    newRow: true,
    type: "Separator",
  },
  {
    layout: {
      xs: {
        padding: {
          right: 4,
        },
        size: "auto",
      },
    },
    name: "authors",
    newRow: true,
    props: {
      icon: "user",
      mode: "link",
      title: "Autor",
      variant: "primary",
    },
    type: "TooltipButton",
  },
  {
    layout: {
      xs: {
        padding: {
          right: 4,
        },
        size: "auto",
      },
    },
    name: "createdAt",
    props: {
      icon: "calendar",
      mode: "link",
      title: "Fecha de creación",
      variant: "primary",
    },
    type: "TooltipButton",
  },
  {
    name: "updatedAt",
    props: {
      icon: "calendar",
      mode: "link",
      title: "Fecha de modificación",
      variant: "primary",
    },
    type: "TooltipButton",
  },
  {
    layout: {
      xs: "auto",
    },
    props: {
      icon: "edit",
      mode: "link",
      size: "large",
      title: "Editar",
      variant: "primary",
    },
    type: "TooltipButton",
  },
];

export const SimpleList = Template.bind({});

SimpleList.args = {
  data: sampleListData,
  columns: simpleListColumns,
  mode: "responsive",
  layout: {
    md: 12,
    sm: 6,
    xs: 12,
  },
};

const mediumListColumns = [
  {
    name: "status",
    newRow: true,
    type: "StatusBadge",
  },
  {
    layout: {
      xs: "auto",
    },
    name: "id",
    props: {
      icon: "info",
      mode: "link",
      size: "large",
      variant: "neutral",
    },
    type: "CopyableButton",
  },
  {
    layout: {
      xs: {
        padding: {
          top: 2,
        },
      },
    },
    name: "title",
    newRow: true,
    props: {
      maxLines: 2,
      size: 5,
    },
    type: "Heading",
  },
  {
    name: "description",
    newRow: true,
    props: {
      gradient: false,
      maxLines: 2,
      size: 2,
    },
    type: "Paragraph",
  },
  {
    layout: {
      xs: {
        padding: {
          bottom: 1,
          top: 2,
        },
      },
    },
    name: "categories",
    newRow: true,
    props: {
      type: "pill",
      variant: "info",
    },
    type: "Badge",
  },
  {
    newRow: true,
    type: "Separator",
  },
  {
    layout: {
      xs: {
        padding: {
          right: 4,
        },
        size: "auto",
      },
    },
    name: "createdAt",
    newRow: true,
    props: {
      icon: "calendar",
      mode: "link",
      title: "Fecha de creación",
      variant: "primary",
    },
    type: "TooltipButton",
  },
  {
    name: "updatedAt",
    props: {
      icon: "calendar",
      mode: "link",
      title: "Fecha de modificación",
      variant: "primary",
    },
    type: "TooltipButton",
  },
  {
    layout: {
      xs: "auto",
    },
    props: {
      icon: "edit",
      mode: "link",
      size: "large",
      title: "Editar",
      variant: "primary",
    },
    type: "TooltipButton",
  },
];

export const MediumList = Template.bind({});

MediumList.args = {
  data: sampleListData,
  columns: mediumListColumns,
  mode: "responsive",
  imageField: "img",
  layout: {
    md: 12,
    sm: 6,
    xs: 12,
  },
};

const fullContentListColumns = [
  {
    name: "status",
    newRow: true,
    type: "StatusBadge",
  },
  {
    layout: {
      xs: {
        padding: {
          right: 4,
        },
        size: "auto",
      },
    },
    props: {
      icon: "heart",
      mode: "link",
      title: "Favoritos",
      variant: "error",
    },
    type: "TooltipButton",
  },
  {
    layout: {
      xs: "auto",
    },
    name: "id",
    props: {
      icon: "info",
      mode: "link",
      size: "large",
      variant: "neutral",
    },
    type: "CopyableButton",
  },
  {
    layout: {
      xs: {
        padding: {
          top: 2,
        },
      },
    },
    name: "title",
    newRow: true,
    props: {
      maxLines: 2,
      size: 5,
    },
    type: "Heading",
  },
  {
    name: "description",
    newRow: true,
    props: {
      gradient: false,
      maxLines: 4,
      size: 2,
    },
    type: "Paragraph",
  },
  {
    layout: {
      xs: {
        padding: {
          bottom: 1,
          top: 2,
        },
      },
    },
    name: "categories",
    newRow: true,
    props: {
      type: "pill",
      variant: "info",
    },
    type: "Badge",
  },
  {
    newRow: true,
    type: "Separator",
  },
  {
    layout: {
      xs: {
        padding: {
          right: 4,
        },
        size: "auto",
      },
    },
    name: "authors",
    newRow: true,
    props: {
      icon: "user",
      mode: "link",
      title: "Autor",
      variant: "primary",
    },
    type: "TooltipButton",
  },
  {
    layout: {
      xs: {
        padding: {
          right: 4,
        },
        size: "auto",
      },
    },
    name: "createdAt",
    props: {
      icon: "calendar",
      mode: "link",
      title: "Fecha de creación",
      variant: "primary",
    },
    type: "TooltipButton",
  },
  {
    name: "updatedAt",
    props: {
      icon: "calendar",
      mode: "link",
      title: "Fecha de modificación",
      variant: "primary",
    },
    type: "TooltipButton",
  },
  {
    layout: {
      xs: "auto",
    },
    props: {
      icon: "edit",
      mode: "link",
      size: "large",
      title: "Editar",
      variant: "primary",
    },
    type: "TooltipButton",
  },
];

export const FullContentList = Template.bind({});

FullContentList.args = {
  data: sampleListData,
  columns: fullContentListColumns,
  mode: "responsive",
  imageField: "img",
  layout: {
    md: 12,
    sm: 6,
    xs: 12,
  },
};

export const SelectableList = Template.bind({});

SelectableList.args = {
  data: sampleData,
  columns: mediumListColumns,
  mode: "responsive",
  imageField: "img",
  onSelect: (id) => actions.log(`Selected row ${id}`),
  selectedItems: ["GHIJK"],
  layout: {
    md: 12,
    sm: 6,
    xs: 12,
  },
};
