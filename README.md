# Product photos

One photo per product, named exactly `<slug>.jpg`, 800x1000 (4:5), roughly 60-200 KB:

mira-tote, noa-shoulder-bag, kai-sling, vea-handbag, aria-mini, rue-backpack, nola-laptop-bag,
sula-hobo, bria-bucket, ivy-clutch, tessa-satchel, dara-belt-bag, orla-weekender,
aven-office-bag, lune-everyday-bag  (each with a .jpg extension)

Pick clean photos where the bag fills most of the frame and matches its type.
Crop to 4:5 with ImageMagick:

    magick original.jpg -resize 800x1000^ -gravity center -extent 800x1000 -quality 82 mira-tote.jpg

Then run `npm run check:images` from the project root.
