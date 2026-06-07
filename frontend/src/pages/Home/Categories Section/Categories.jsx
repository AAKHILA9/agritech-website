import fertilizers from "../../../assets/images/fertilizers.jpg";
import pesticides from "../../../assets/images/pesticides.jpg";
import bioProducts from "../../../assets/images/bioproducts.jpg";
import growthPromoters from "../../../assets/images/growth.promototors.jpg";
import categoryBg from "../../../assets/images/product-category-bg.jpg";

function Categories() {
  const categories = [
    {
      name: "Fertilizers",
      image: fertilizers,
    },
    {
      name: "Pesticides",
      image: pesticides,
    },
    {
      name: "Bio Products",
      image: bioProducts,
    },
    {
      name: "Growth Promoters",
      image: growthPromoters,
    },
  ];

  return (
    <section
      style={{
        backgroundImage: `url(${categoryBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        padding: "100px 50px",
        minHeight: "900px",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          color:"#1b5e20",
          fontSize: "42px",
          marginBottom: "80px",
          textShadow: "2px 2px 10px rgba(0,0,0,0.5)",
        }}
      >
        Product Categories
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "100px 20px",
          maxWidth:  "700px",
          margin: "0 auto",
        }}
      >
        {categories.map((category, index) => (
          <div
            key={index}
            style={{
              width: "320px",
              backgroundColor: "rgba(255,255,255,0.95)",
              borderRadius: "20px",
              overflow: "hidden",
              boxShadow: "0 8px 25px rgba(0,0,0,0.2)",
            }}
          >
            <img
              src={category.image}
              alt={category.name}
              style={{
                width: "100%",
                height: "220px",
                objectFit: "cover",
              }}
            />

            <h3
              style={{
                padding: "20px",
                color: "#2d6a4f",
                textAlign: "center",
                fontSize: "24px",
              }}
            >
              {category.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;