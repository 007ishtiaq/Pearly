const categorydata = {
  Categories: [
    {
      _id: "1",
      name: "Electronics",
      parent: "im parent category",
      children: [
        { _id: "1", name: "leptop children", children: [] },
        { _id: "2", name: "computer  children", children: [] },
        { _id: "3", name: "tv children", children: [] },
        { _id: "4", name: "led children", children: [] },
        {
          _id: "5",
          name: "computer children",
          children: [
            { _id: "1", name: "mouseleptop children" },
            { _id: "2", name: "keyboard  children" },
            { _id: "3", name: "screen children" },
            { _id: "4", name: "mousepad children" },
            { _id: "5", name: "scroller children" },
          ],
        },
      ],
    },
    {
      _id: "2",
      name: "Kitchan",
      parent: "im parent category",
      children: [
        {
          _id: "1",
          name: "leptop children",
          children: [
            { _id: "3", name: "screen children" },
            { _id: "4", name: "mousepad children" },
          ],
        },
        { _id: "2", name: "pogo  children", children: [] },
        { _id: "3", name: "goga children", children: [] },
        {
          _id: "4",
          name: "soga children",
          children: [
            { _id: "3", name: "screen children" },
            { _id: "4", name: "mousepad children" },
          ],
        },
        { _id: "5", name: "loga children", children: [] },
      ],
    },
    {
      _id: "3",
      name: "toys",
      parent: "im parent category",
      children: [
        { _id: "1", name: "leptop children", children: [] },
        { _id: "2", name: "pogo  children", children: [] },
        { _id: "3", name: "goga children", children: [] },
        { _id: "4", name: "soga children", children: [] },
        { _id: "5", name: "loga children", children: [] },
      ],
    },
    {
      _id: "4",
      name: "books",
      parent: "im parent category",
      children: [
        { _id: "1", name: "danger children", children: [] },
        { _id: "2", name: "funny  children", children: [] },
        { _id: "3", name: "fun children", children: [] },
        { _id: "4", name: "soft children", children: [] },
        {
          _id: "5",
          name: "black children",
          children: [
            { _id: "4", name: "mousepad children" },
            { _id: "5", name: "scroller children" },
            { _id: "6", name: "mousepad children" },
            { _id: "7", name: "scroller children" },
            { _id: "8", name: "mousepad children" },
            { _id: "9", name: "scroller children" },
            { _id: "10", name: "mousepad children" },
            { _id: "11", name: "scroller children" },
            { _id: "12", name: "mousepad children" },
            { _id: "111", name: "scroller children" },
            { _id: "333", name: "mousepad children" },
            { _id: "444", name: "scroller children" },
          ],
        },
      ],
    },
  ],
};

export default categorydata;
