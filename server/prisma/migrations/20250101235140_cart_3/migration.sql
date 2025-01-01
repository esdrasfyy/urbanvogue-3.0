/*
  Warnings:

  - The primary key for the `cart_items` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `cart_items` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `variation_id` on the `cart_items` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - Added the required column `image` to the `cart_items` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `cart_items` DROP PRIMARY KEY,
    ADD COLUMN `image` VARCHAR(191) NOT NULL,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `price` DECIMAL(10, 2) NOT NULL,
    MODIFY `variation_id` INTEGER NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AddForeignKey
ALTER TABLE `cart_items` ADD CONSTRAINT `cart_items_variation_id_fkey` FOREIGN KEY (`variation_id`) REFERENCES `product_colors_sizes`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
