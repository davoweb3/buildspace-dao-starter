import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0x2332f3a48cE38D56a3E96891D3895730F6E7F695");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Coleccion de ORO",
        description: "NFT de Acceso para votar",
        image: readFileSync("scripts/assets/goldbar.jpg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();