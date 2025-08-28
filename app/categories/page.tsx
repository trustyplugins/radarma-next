// app/categories/page.tsx
import { supabase } from "@/lib/supabaseServer";
import HomeHeader from "@/app/components/header/home-header";
import AllCategories from "@/app/categories/AllCategories";
import NewFooter from "@/app/components/footer/newFooter";
import BreadCrumb from '@/app/components/common/breadcrumb/breadCrumb';
export default async function CategoriesPage() {
  const { data: categories, error } = await supabase
    .from("category_with_counts") // use the view we created
    .select("*")
    .order("category");

  if (error) {
    console.error(error.message);
  }

  return (
    <>
    <HomeHeader type={1} />
    <BreadCrumb title="Categories" item1="Categories" />
    <section className="section category-section">
      <div className="container">
        <AllCategories categories={categories || []} />
      </div>
    </section>
    <NewFooter />
    </>
  );
}
