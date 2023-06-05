import styles from "./page.module.css";
import fs from "fs/promises";
import Link from "next/link";
import path from "path";
export const dynamic = "auto";
export const dynamicParams = true;
export const revalidate = 10;
export const fetchCache = "auto";
export const runtime = "nodejs";
export const preferredRegion = "auto";

async function getData() {
  console.log("Revalidating...");
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");

  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  await new Promise((res) => setTimeout(res, 3000));

  return data;
}

export default async function Home() {
  const data = await getData();
  const products = data.products;

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <Link href={`/${product.id}`}>{product.title}</Link>{" "}
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
