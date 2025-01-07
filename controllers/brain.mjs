import Brain from "../models/brain.mjs";

async function seed(req, res) {
  const TODAY = new Date();
  try {
    await Brain.create([
      {
        user: "dave",
        entryDate: TODAY,
        entryType: "Idea",
        description: "i do not have ideas",
      },
      {
        user: "Ade",
        entryDate: TODAY,
        entryType: "Idea",
        description: "i do not have ideas",
      },
      {
        user: "sola",
        entryDate: TODAY,
        entryType: "Idea",
        description: "i do not have ideas",
      },
      {
        user: "Oladele",
        entryDate: TODAY,
        entryType: "Idea",
        description: "i do not have ideas",
      },
    ]);
    res.send("success").status(200);
  } catch (err) {
    res.send(err).status(400);
  }
}

const getEntries = async (req, res) => {
  try {
    const foundEntries = await Brain.find({});
    res.status(200).json(foundEntries);
  } catch (err) {
    res.send(err).status(400);
  }
};
export default { seed, getEntries };
