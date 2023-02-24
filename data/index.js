const bills = [
  {
    id: 1,
    title: "Table 1",
    details: {
      orderType: "Dine in",
      customer: "Ahmed Shami",
      guests: 2,
      date: "Jan 1, 2022",
      isPaid: false,
      cost: 18.0,
      paymentMethod: "",
    },
    orders: [
      {
        id: 1,
        orderInfo: {
          time: "08:22 AM",
          isPaid: false,
        },
        items: [
          {
            id: 1,
            itemInfo: {
              title: "Caffe Americano",
            },
            modifiers: ["No milk", "Something"],
            payment: false,
            price: 20.0,
          },
          {
            id: 1,
            itemInfo: {
              title: "Caffe Americano",
            },
            modifiers: ["No milk", "Something"],
            payment: false,
            price: 20.0,
          },
        ],
      },
      {
        id: 2,
        orderInfo: {
          time: "08:22 AM",
          isPaid: true,
        },
        items: [
          {
            id: 1,
            itemInfo: {
              title: "Caffe Americano",
            },
            modifiers: ["No milk", "Something"],
            payment: true,
            price: 20.0,
          },
        ],
      },
      {
        id: 3,
        orderInfo: {
          time: "08:22 AM",
          isPaid: false,
        },
        items: [
          {
            id: 1,
            itemInfo: {
              title: "Caffe Americano",
            },
            modifiers: ["No milk", "Something"],
            payment: false,
            price: 20.0,
          },
        ],
      },
    ],
    discount: 2.0,
    total: 18.0,
  },
  {
    id: 2,
    title: "Table 2",
    details: {
      orderType: "Dine in",
      customer: "Ahmed Shami",
      guests: 2,
      date: "Jan 1, 2022",
      isPaid: true,
      cost: 18.0,
      paymentMethod: "",
    },
    orders: [
      {
        id: 1,
        orderInfo: {
          time: "08:22 AM",
          isPaid: false,
        },
        items: [
          {
            id: 1,
            itemInfo: {
              title: "Caffe Americano",
            },
            modifiers: ["No milk", "Something"],
            payment: true,
            price: 20.0,
          },
          {
            id: 1,
            itemInfo: {
              title: "Caffe Americano",
            },
            modifiers: ["No milk", "Something"],
            payment: true,
            price: 20.0,
          },
        ],
      },
      {
        id: 2,
        orderInfo: {
          time: "08:22 AM",
          isPaid: false,
        },
        items: [
          {
            id: 1,
            itemInfo: {
              title: "Caffe Americano",
            },
            modifiers: ["No milk", "Something"],
            payment: true,
            price: 20.0,
          },
        ],
      },
      {
        id: 3,
        orderInfo: {
          time: "08:22 AM",
          isPaid: false,
        },
        items: [
          {
            id: 1,
            itemInfo: {
              title: "Caffe Americano",
            },
            modifiers: ["No milk", "Something"],
            payment: true,
            price: 20.0,
          },
        ],
      },
    ],
    discount: 2.0,
    total: 18.0,
  },
  {
    id: 3,
    title: "Table 3",
    details: {
      orderType: "Dine in",
      customer: "Ahmed Shami",
      guests: 2,
      date: "Jan 01, 2022",
      isPaid: false,
      cost: 18.0,
      paymentMethod: "",
    },
    orders: [
      {
        id: 1,
        orderInfo: {
          time: "08:22 AM",
          isPaid: false,
        },
        items: [
          {
            id: 1,
            itemInfo: {
              title: "Caffe Americano",
            },
            modifiers: ["No milk", "Something"],
            payment: false,
            price: 20.0,
          },
          {
            id: 1,
            itemInfo: {
              title: "Caffe Americano",
            },
            modifiers: ["No milk", "Something"],
            payment: false,
            price: 20.0,
          },
        ],
      },
      {
        id: 2,
        orderInfo: {
          time: "08:22 AM" ,
          isPaid: false,
        },
        items: [
          {
            id: 1,
            itemInfo: {
              title: "Caffe Americano",
            },
            modifiers: ["No milk", "Something"],
            payment: false,
            price: 20.0,
          },
        ],
      },
      {
        id: 3,
        orderInfo: {
          time:"08:22 AM",
          isPaid: false,
        },
        items: [
          {
            id: 1,
            itemInfo: {
              title: "Caffe Americano",
            },
            modifiers: ["No milk", "Something"],
            payment: false,
            price: 20.0,
          },
        ],
      },
    ],
    discount: 2.0,
    total: 18.0,
  },
  {
    id: 4,
    title: "Table 4",
    details: {
      orderType: "Dine in",
      customer: "Ahmed Shami",
      guests: 2,
      date: "Jan 1, 2022",
      isPaid: false,
      cost: 18.0,
      paymentMethod: "",
    },
    orders: [
      {
        id: 1,
        orderInfo: {
          time: "08:22 AM",
          isPaid: false,
        },
        items: [
          {
            id: 1,
            itemInfo: {
              title: "Caffe Americano",
            },
            modifiers: ["No milk", "Something"],
            payment: false,
            price: 20.0,
          },
          {
            id: 1,
            itemInfo: {
              title: "Caffe Americano",
            },
            modifiers: ["No milk", "Something"],
            payment: false,
            price: 20.0,
          },
        ],
      },
      {
        id: 2,
        orderInfo: {
          time: "08:22 AM",
          isPaid: false,
        },
        items: [
          {
            id: 1,
            itemInfo: {
              title: "Caffe Americano",
            },
            modifiers: ["No milk", "Something"],
            payment: false,
            price: 20.0,
          },
        ],
      },
      {
        id: 3,
        orderInfo: {
          time: "08:22 AM",
          isPaid: false,
        },
        items: [
          {
            id: 1,
            itemInfo: {
              title: "Caffe Americano",
            },
            modifiers: ["No milk", "Something"],
            payment: false,
            price: 20.0,
          },
        ],
      },
    ],
    discount: 2.0,
    total: 18.0,
  },
  {
    id: 5,
    title: "Table 5",
    details: {
      orderType: "Dine in",
      customer: "Ahmed Shami",
      guests: 2,
      date: "Jan 1, 2022",
      isPaid: false,
      cost: 18.0,
      paymentMethod: "",
    },
    orders: [
      {
        id: 1,
        orderInfo: {
          time: "08:22 AM",
          isPaid: false,
        },
        items: [
          {
            id: 1,
            itemInfo: {
              title: "Caffe Americano",
            },
            modifiers: ["No milk", "Something"],
            payment: false,
            price: 20.0,
          },
          {
            id: 1,
            itemInfo: {
              title: "Caffe Americano",
            },
            modifiers: ["No milk", "Something"],
            payment: false,
            price: 20.0,
          },
        ],
      },
      {
        id: 2,
        orderInfo: {
          time: "08:22 AM",
          isPaid: false,
        },
        items: [
          {
            id: 1,
            itemInfo: {
              title: "Caffe Americano",
            },
            modifiers: ["No milk", "Something"],
            payment: false,
            price: 20.0,
          },
        ],
      },
      {
        id: 3,
        orderInfo: {
          time: "08:22 AM",
          isPaid: false,
        },
        items: [
          {
            id: 1,
            itemInfo: {
              title: "Caffe Americano",
            },
            modifiers: ["No milk", "Something"],
            payment: false,
            price: 20.0,
          },
        ],
      },
    ],
    discount: 2.0,
    total: 18.0,
  },
  {
    id: 6,
    title: "Table 6",
    details: {
      orderType: "Dine in",
      customer: "Ahmed Shami",
      guests: 2,
      date: "Jan 1, 2022",
      isPaid: false,
      cost: 18.0,
      paymentMethod: "",
    },
    orders: [
      {
        id: 1,
        orderInfo: {
          time: "08:22 AM",
          isPaid: false,
        },
        items: [
          {
            id: 1,
            itemInfo: {
              title: "Caffe Americano",
            },
            modifiers: ["No milk", "Something"],
            payment: false,
            price: 20.0,
          },
          {
            id: 1,
            itemInfo: {
              title: "Caffe Americano",
            },
            modifiers: ["No milk", "Something"],
            payment: false,
            price: 20.0,
          },
        ],
      },
      {
        id: 2,
        orderInfo: {
          time: "08:22 AM",
          isPaid: false,
        },
        items: [
          {
            id: 1,
            itemInfo: {
              title: "Caffe Americano",
            },
            modifiers: ["No milk", "Something"],
            payment: false,
            price: 20.0,
          },
        ],
      },
      {
        id: 3,
        orderInfo: {
          time: "08:22 AM",
          isPaid: false,
        },
        items: [
          {
            id: 1,
            itemInfo: {
              title: "Caffe Americano",
            },
            modifiers: ["No milk", "Something"],
            payment: false,
            price: 20.0,
          },
        ],
      },
    ],
    discount: 2.0,
    total: 18.0,
  },
  {
    id: 7,
    title: "Table 7",
    details: {
      orderType: "Dine in",
      customer: "Ahmed Shami",
      guests: 2,
      date: "Jan 1, 2022",
      isPaid: false,
      cost: 18.0,
      paymentMethod: "",
    },
    orders: [
      {
        id: 1,
        orderInfo: {
          time: "08:22 AM",
          isPaid: false,
        },
        items: [
          {
            id: 1,
            itemInfo: {
              title: "Caffe Americano",
            },
            modifiers: ["No milk", "Something"],
            payment: false,
            price: 20.0,
          },
          {
            id: 1,
            itemInfo: {
              title: "Caffe Americano",
            },
            modifiers: ["No milk", "Something"],
            payment: false,
            price: 20.0,
          },
        ],
      },
      {
        id: 2,
        orderInfo: {
          time: "08:22 AM",
          isPaid: false,
        },
        items: [
          {
            id: 1,
            itemInfo: {
              title: "Caffe Americano",
            },
            modifiers: ["No milk", "Something"],
            payment: false,
            price: 20.0,
          },
        ],
      },
      {
        id: 3,
        orderInfo: {
          time: "08:22 AM",
          isPaid: false,
        },
        items: [
          {
            id: 1,
            itemInfo: {
              title: "Caffe Americano",
            },
            modifiers: ["No milk", "Something"],
            payment: false,
            price: 20.0,
          },
        ],
      },
    ],
    discount: 2.0,
    total: 18.0,
  },
  {
    id: 8,
    title: "Table 8",
    details: {
      orderType: "Dine in",
      customer: "Ahmed Shami",
      guests: 2,
      date: "Jan 1, 2022",
      isPaid: false,
      cost: 18.0,
      paymentMethod: "",
    },
    orders: [
      {
        id: 1,
        orderInfo: {
          time: "08:22 AM",
          isPaid: false,
        },
        items: [
          {
            id: 1,
            itemInfo: {
              title: "Caffe Americano",
            },
            modifiers: ["No milk", "Something"],
            payment: false,
            price: 20.0,
          },
          {
            id: 1,
            itemInfo: {
              title: "Caffe Americano",
            },
            modifiers: ["No milk", "Something"],
            payment: false,
            price: 20.0,
          },
        ],
      },
      {
        id: 2,
        orderInfo: {
          time: "08:22 AM",
          isPaid: false,
        },
        items: [
          {
            id: 1,
            itemInfo: {
              title: "Caffe Americano",
            },
            modifiers: ["No milk", "Something"],
            payment: false,
            price: 20.0,
          },
        ],
      },
      {
        id: 3,
        orderInfo: {
          time: "08:22 AM",
          isPaid: false,
        },
        items: [
          {
            id: 1,
            itemInfo: {
              title: "Caffe Americano",
            },
            modifiers: ["No milk", "Something"],
            payment: false,
            price: 20.0,
          },
        ],
      },
    ],
    discount: 2.0,
    total: 18.0,
  },
  {
    id: 9,
    title: "Table 9",
    details: {
      orderType: "Dine in",
      customer: "Ahmed Shami",
      guests: 2,
      date: "Jan 1, 2022",
      isPaid: false,
      cost: 18.0,
      paymentMethod: "",
    },
    orders: [
      {
        id: 1,
        orderInfo: {
          time: "08:22 AM",
          isPaid: false,
        },
        items: [
          {
            id: 1,
            itemInfo: {
              title: "Caffe Americano",
            },
            modifiers: ["No milk", "Something"],
            payment: false,
            price: 20.0,
          },
          {
            id: 1,
            itemInfo: {
              title: "Caffe Americano",
            },
            modifiers: ["No milk", "Something"],
            payment: false,
            price: 20.0,
          },
        ],
      },
      {
        id: 2,
        orderInfo: {
          time: "08:22 AM",
          isPaid: false,
        },
        items: [
          {
            id: 1,
            itemInfo: {
              title: "Caffe Americano",
            },
            modifiers: ["No milk", "Something"],
            payment: false,
            price: 20.0,
          },
        ],
      },
      {
        id: 3,
        orderInfo: {
          time: "08:22 AM",
          isPaid: false,
        },
        items: [
          {
            id: 1,
            itemInfo: {
              title: "Caffe Americano",
            },
            modifiers: ["No milk", "Something"],
            payment: false,
            price: 20.0,
          },
        ],
      },
    ],
    discount: 2.0,
    total: 18.0,
  },
];

export default bills;
