// src/pages/ProductDetail.jsx
import { useParams, Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import products from "../data/products";
import { toast } from "react-toastify";
import { useState } from "react";
import {
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
  FaCommentDots,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const product = products.find((p) => p.id === parseInt(id));
  const [showCommentBox, setShowCommentBox] = useState(false);
  const [newComment, setNewComment] = useState("");
  const [allComments, setAllComments] = useState([
    "Amazing fragrance, lasts all day!",
    "My favorite scent so far!",
    "Smells luxurious and fresh.",
  ]);

  if (!product) {
    return (
      <h2 className="text-center mt-20 text-red-500">Product not found.</h2>
    );
  }

  const productNotes = product.notes
    .toLowerCase()
    .split(",")
    .map((n) => n.trim());

  const recommended = products
    .filter(
      (p) =>
        p.id !== product.id &&
        p.notes
          .toLowerCase()
          .split(",")
          .some((note) => productNotes.includes(note.trim()))
    )
    .slice(0, 3);

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++)
      stars.push(<FaStar key={i} className="text-yellow-400" />);
    if (hasHalfStar)
      stars.push(<FaStarHalfAlt key="half" className="text-yellow-400" />);
    while (stars.length < 5)
      stars.push(<FaRegStar key={stars.length} className="text-yellow-400" />);
    return stars;
  };

  return (
    <div className="max-w-5xl mx-auto p-4">
      {/* Product Section */}
      <div className="grid md:grid-cols-2 gap-10">
        <img
          src={product.img}
          alt={product.name}
          className="w-full h-80 object-cover rounded shadow"
        />
        <div>
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <div className="flex items-center mb-2">
            {renderStars(product.rating)}
            <span className="ml-2 text-sm text-gray-600">
              ({product.rating})
            </span>
          </div>
          <p className="text-green-600 font-semibold mb-1">
            🔥 {product.sold || 250}+ sold
          </p>
          <p className="text-gray-700 mb-2">Notes: {product.notes}</p>
          <p className="text-xl font-semibold mb-4">${product.price}</p>

          <button
            onClick={() => {
              addToCart(product);
              toast.success("Product added to cart!");
            }}
            className="bg-blue-600 hover:bg-green-600 text-white px-4 py-2 rounded transition duration-300"
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* Customer Reviews */}
      <div className="mt-10">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-bold">Customer Reviews</h3>
          <button
            onClick={() => setShowCommentBox(!showCommentBox)}
            className="text-blue-600 hover:text-green-600 transition"
            title="Add a comment"
          >
            <FaCommentDots className="text-2xl" />
          </button>
        </div>

        {showCommentBox && (
          <div className="mb-6">
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Write your review..."
              className="w-full p-3 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
              rows={3}
            />
            <button
              onClick={() => {
                if (newComment.trim()) {
                  setAllComments([newComment, ...allComments].slice(0, 3));
                  setNewComment("");
                  setShowCommentBox(false); // ✅ This line hides the comment box
                  toast.success("Review submitted!");
                }
              }}
              className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-green-600 transition"
            >
              Submit
            </button>
          </div>
        )}

        <ul className="space-y-2">
          {allComments.slice(0, 3).map((comment, idx) => (
            <li key={idx} className="bg-gray-100 p-3 rounded shadow-sm">
              {comment}
            </li>
          ))}
        </ul>
      </div>

      {/* Recommended Products */}
      <div className="mt-14">
        <h2 className="text-2xl font-bold mb-4">You might also like</h2>
        {recommended.length === 0 ? (
          <p className="text-gray-500">No related perfumes found.</p>
        ) : (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {recommended.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={`/product/${item.id}`}
                  className="block border border-gray-200 rounded-xl overflow-hidden shadow hover:shadow-lg transition-all duration-300 bg-white p-4"
                >
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-48 object-cover rounded mb-3"
                  />
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <div className="flex items-center mb-1">
                    {renderStars(item.rating)}
                    <span className="ml-2 text-sm text-gray-600">
                      ({item.rating})
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">Notes: {item.notes}</p>
                  <p className="text-blue-600 font-semibold mt-1">
                    ${item.price}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
