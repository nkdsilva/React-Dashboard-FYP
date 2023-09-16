export const menu = [
    {
      id: 1,
      title: "MAIN",
      listItems: [
        {
          id: 1,
          title: "Homepage",
          url: "/",
          icon: "home.svg",
        },
        {
          id: 2,
          title: "Admin",
          url: "/users/1",
          icon: "user.svg",
        },
      ],
    },
    {
      id: 2,
      title: "LISTS",
      listItems: [
        {
          id: 1,
          title: "Users",
          url: "/users",
          icon: "user.svg",
        },
        {
          id: 2,
          title: "Profile",
          url: "/profile",
          icon: "product.svg",
        },
        {
          id: 3,
          title: "Notes",
          url: "/notes",
          icon: "note.svg",
        },
      ],
    },
    {
      id: 3,
      title: "GENERAL",
      listItems: [
        {
          id: 1,
          title: "Elements",
          url: "/",
          icon: "element.svg",
        },
        {
          id: 2,
          title: "Forms",
          url: "/",
          icon: "form.svg",
        },
        {
          id: 3,
          title: "Calendar",
          url: "/",
          icon: "calendar.svg",
        },
      ],
    },
    {
      id: 4,
      title: "MAINTENANCE",
      listItems: [
        {
          id: 1,
          title: "Settings",
          url: "/",
          icon: "setting.svg",
        },
        {
          id: 2,
          title: "Backups",
          url: "/",
          icon: "backup.svg",
        },
      ],
    },
    {
      id: 5,
      title: "ANALYTICS",
      listItems: [
        {
          id: 1,
          title: "Charts",
          url: "/",
          icon: "chart.svg",
        },
        {
          id: 2,
          title: "Logs",
          url: "/",
          icon: "log.svg",
        },
      ],
    },
  ];
  export const topDealUsers = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      username: "J.Dissanayake",
      email: "jd@gmail.com",
      code: "COL_15_3289",
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600",
      username: "Kumari Rathnayake",
      email: "kumariR@gmail.com",
      code: "KUR_04_3478",
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1600",
      username: "Sarath De Silva",
      email: "sdsilva@gmail.com",
      code: "COL_05_5346",
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1600",
      username: "Dennis Perera",
      email: "dennisP@gmail.com",
      code: "ANU_01_1234",
    },
    {
      id: 5,
      img: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1600",
      username: "Juan Harrington",
      email: "juan@gmail.com",
      code: "COL_05_1789",
    },
    {
      id: 6,
      img: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1600",
      username: "Saman Kumara",
      email: "samanK@gmail.com",
      code: "GAL_05_0546",
    },
    {
      id: 7,
      img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      username: "Lalith Peiris",
      email: "lalithP@gmail.com",
      code: "KUR_01_0354",
    },
    // {
    //   id: 8,
    //   img: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1600",
    //   username: "Dennis Perera",
    //   email: "dennisP@gmail.com",
    //   code: "MAT_01_1234",
    // },
  ];

  export const chartBoxUser = {
    color:"#8884d8",
    icon:"/userIcon.svg",
    title:"Total Users",
    number:"1200",
    dataKey:"users",
    percentage:45,
    chartData:[
      {name:"Sun", users:400},
      {name:"Mon", users:600},
      {name:"Tue", users:500},
      {name:"Wed", users:700},
      {name:"Thu", users:400},
      {name:"Fri", users:500},
      {name:"Sat", users:450},
    ]
  };

  export const chartBoxProduct = {
    color:"skyblue",
    icon:"/productIcon.svg",
    title:"Current energy consumption(units)",
    number:"2800",
    dataKey:"products",
    percentage:21,
    chartData:[
      {name:"Sun", users:400},
      {name:"Mon", users:600},
      {name:"Tue", users:500},
      {name:"Wed", users:700},
      {name:"Thu", users:400},
      {name:"Fri", users:500},
      {name:"Sat", users:450},
    ]
  };

  export const chartBoxDaily = {
    color:"teal",
    icon:"/revenueIcon.svg",
    title:"Daily Consumption(Units)",
    number:"3600",
    dataKey:"revenue",
    percentage:-12,
    chartData:[
      {name:"Sun", users:400},
      {name:"Mon", users:600},
      {name:"Tue", users:500},
      {name:"Wed", users:700},
      {name:"Thu", users:400},
      {name:"Fri", users:500},
      {name:"Sat", users:450},
    ]
  };

  export const chartBoxMonthly = {
    color:"gold",
    icon:"/conversionIcon.svg",
    title:"Monthly Consumption (Units)",
    number:"108,000",
    dataKey:"ratio",
    percentage:12,
    chartData:[
      {name:"Sun", users:400},
      {name:"Mon", users:600},
      {name:"Tue", users:500},
      {name:"Wed", users:700},
      {name:"Thu", users:400},
      {name:"Fri", users:500},
      {name:"Sat", users:450},
    ]
  };

  export const barChartBoxVisit = {
    title: "Monthly Consumption",
    color: "#FF8042",
    dataKey: "visit",
    chartData: [
      {
        name: "Sun",
        visit: 4000,
      },
      {
        name: "Mon",
        visit: 3000,
      },
      {
        name: "Tue",
        visit: 2000,
      },
      {
        name: "Wed",
        visit: 2780,
      },
      {
        name: "Thu",
        visit: 1890,
      },
      {
        name: "Fri",
        visit: 2390,
      },
      {
        name: "Sat",
        visit: 3490,
      },
    ],
  };

  export const barChartBoxRevenue = {
    title: "Profit Earned",
    color: "#8884d8",
    dataKey: "profit",
    chartData: [
      {
        name: "Sun",
        profit: 4000,
      },
      {
        name: "Mon",
        profit: 3000,
      },
      {
        name: "Tue",
        profit: 2000,
      },
      {
        name: "Wed",
        profit: 2780,
      },
      {
        name: "Thu",
        profit: 1890,
      },
      {
        name: "Fri",
        profit: 2390,
      },
      {
        name: "Sat",
        profit: 3490,
      },
    ],
  };

  export const userRows = [
    {
      id: 1,
      //img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      lastName: "Dissasnayake",
      firstName: "Janaka",
      email: "jd@gmail.com",
      phone: "071 1953459",
      createdAt: "02.09.2023",
      verified: true,
    },
    {
      id: 2,
      //img: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Rathnayake",
      firstName: "Kumari",
      email: "kumari@gmail.com",
      phone: "071 8799794",
      createdAt: "02.09.2023",
      verified: true,
    },
    {
      id: 3,
      //img: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "De Silva",
      firstName: "Sarath",
      email: "sdsilva@gmail.com",
      phone: "077 6567054",
      createdAt: "01.02.2023",
      verified: true,
    },
    {
      id: 4,
      //img: "https://images.pexels.com/photos/871495/pexels-photo-871495.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Perera",
      firstName: "Dennis",
      email: "dennisP@gmai.com",
      phone: "071 2864277",
      createdAt: "01.02.2023",
      verified: true,
    },
    {
      id: 5,
      //img: "https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Harrington",
      firstName: "Juan",
      email: "juan@gmail.com",
      phone: "077 2470078",
      createdAt: "01.02.2023",
      verified:true,
    },
    {
      id: 6,
      //img: "https://images.pexels.com/photos/769745/pexels-photo-769745.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Saman",
      firstName: "Kumara",
      email: "samanK@gmail.com",
      phone: "025 2220948",
      createdAt: "01.02.2023",
      verified: true,
    },
    {
      id: 7,
      //img: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Pieris",
      firstName: "Lalith",
      email: "lalithP@gmail.com",
      phone: "075 3847568",
      createdAt: "01.02.2023",
      verified:true,
    },
    {
      id: 8,
      //img: "https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "De Silva",
      firstName: "Dhammika",
      email: "dhammika360@gmail.com",
      phone: "077 8789555",
      createdAt: "01.02.2023",
      verified: true,
    },
    {
      id: 9,
      //img: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "Dissanayake",
      firstName: "Ruwan",
      email: "ruwandissanayaka@gmail.com",
      phone: "077 5658678",
      createdAt: "01.02.2023",
      verified: true,
    },
    {
      id: 10,
      //img: "https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=1600",
      lastName: "De Silva",
      firstName: "Navoda",
      email: "navoda@gmail.com",
      phone: "071 1953458",
      createdAt: "01.02.2023",
      verified: true,
    },
  ];
  

