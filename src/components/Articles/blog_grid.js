import { Link } from "react-router-dom";
import { articles } from "../../constants/articles";
import "./blog-grid.css";
import Navbar from "../Navbar/Navbar";
import HomeNavLink from "../Navbar/HomeNavLink";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";

export default function BlogGrid() {
  return (
    <section>
      <Navbar HomeLinkToRender={HomeNavLink} />
      <div className="max-w-6xl mx-auto py-12 px-6">
        <div className="grid md:grid-cols-2 gap-8">
          {articles.map((article, index) => (
            <Link
              className="card-link cursor-pointer"
              to={`/article/${index}`}
              state={{ article: article }}
            >
              {" "}
              <div
                key={index}
                className="p-6 rounded-2xl shadow-lg border border-gray-200  hover:bg-[#dcdcdc]"
              >
                <div className="flex gap-4  ">
                  <img
                    src={article.image}
                    alt={article.author}
                    className="w-14 h-14 rounded-full border-2 border-red-500"
                  />
                  <div>
                    <p className=" text-blue-600 font-semibold  no-underline">
                      {article.author}
                    </p>

                    <h2 className="text-xl font-bold leading-tight  text-[#024677] ">
                      {article.title}
                    </h2>

                    <p className="text-gray-600 text-sm  mt-2 line-clamp-4 overflow-hidden text-ellipsis">
                      {article.description}
                    </p>
                    <p className="text-gray-400 text-xs mt-2">
                      📌 {article.date}
                    </p>
                    <div className="mt-2 flex gap-2 flex-wrap">
                      {article.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="text-sm font-medium text-blue-600 hover:underline cursor-pointer"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Contact />
      <Footer />
    </section>
  );
}
