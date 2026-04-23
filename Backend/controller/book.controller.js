import Book from "../models/book.model.js";

export const getBook = async (req, res) => {
  try {
    const { search } = req.query;

    // Agar search query hai toh filter karo, warna sab do
    const query = search
      ? { name: { $regex: search, $options: "i" } } // case-insensitive search
      : {};

    const book = await Book.find(query);
    res.status(200).json(book);
  } catch (error) {
    console.log("Error", error);
    res.status(500).json(error);
  }
};
