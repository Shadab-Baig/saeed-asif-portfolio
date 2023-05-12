import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonServiceService } from 'src/app/services/common-service.service';

@Component({
  selector: 'app-graphic-designing',
  templateUrl: './graphic-designing.component.html',
  styleUrls: ['./graphic-designing.component.scss']
})
export class GraphicDesigningComponent implements OnInit {

  public loading = false;
  constructor(private router: Router , private service:CommonServiceService) { }

  public categories = [
    {
      name: 'Branding designs',
      images: [
        {
          id: 1,
          path: 'portfolio/branding-designs/Akkamas-Sationory-Mockup/Akkamas-Staionory-Mockups.jpg',
          detailImages: [
            { detailPathImages: 'portfolio/branding-designs/Akkamas-Sationory-Mockup/akamas-t-shirts-mockups.jpg' },
            { detailPathImages: 'portfolio/branding-designs/Akkamas-Sationory-Mockup/akamas-bottel-cap-mockups.jpg' },
            { detailPathImages: 'portfolio/branding-designs/Akkamas-Sationory-Mockup/Akamas_Logo_Mockup_2.jpg' },
            { detailPathImages: 'portfolio/branding-designs/Akkamas-Sationory-Mockup/Akamas_Logo_Mockup_.jpg' },
          ],
        },
        {
          id: 2,
          path: 'portfolio/branding-designs/Alfreedo-tours-mockup/Alfreedo-tours_Stationery_Mockup_2.jpg',
          detailImages: [
            { detailPathImages: 'portfolio/branding-designs/Alfreedo-tours-mockup/Alfreedo tours_Stationery_Mockup_ 1.jpg' },
            { detailPathImages: 'portfolio/branding-designs/Alfreedo-tours-mockup/Alfreedo_Pin_Button_Mockup_1.jpg' },
            { detailPathImages: 'portfolio/branding-designs/Alfreedo-tours-mockup/Alfreedo-tours-logo-mockups.jpg' },
          ],
        },
        {
          id: 3,
          path: 'portfolio/branding-designs/doonaa-sationory-mockups/donna-mockups-sationory.jpg',
          detailImages: [
            { detailPathImages: 'portfolio/branding-designs/doonaa-sationory-mockups/donna_Logo_Mockup_.jpg' },
            { detailPathImages: 'portfolio/branding-designs/doonaa-sationory-mockups/donna-mockups.jpg' },
            { detailPathImages: 'portfolio/branding-designs/doonaa-sationory-mockups/donna-store-with-cups-logo-mockups-2.jpg' },
            { detailPathImages: 'portfolio/branding-designs/doonaa-sationory-mockups/donna-visiting-card-mockups.jpg' },
          ],
        },
        {
          id: 4,
          path: 'portfolio/branding-designs/Kamarah-resturent/kammarah-stationory-mockkups.jpg',
          detailImages: [
            { detailPathImages: 'portfolio/branding-designs/Kamarah-resturent/kammarah-logo-mockkups.jpg' },
            { detailPathImages: 'portfolio/branding-designs/Kamarah-resturent/kammarah-wristband-mockkups-2.jpg' },
            { detailPathImages: 'portfolio/branding-designs/Kamarah-resturent/kammarah-wristband-mockkups.jpg' },
            { detailPathImages: 'portfolio/branding-designs/Kamarah-resturent/kammara-visiting-card-mockups.jpg' },
          ],
        },
        {
          id: 5,
          path: 'portfolio/branding-designs/Roclle-staionory-Mockup/Rocelle-stationory-mockups.jpg',
          detailImages: [
            { detailPathImages: 'portfolio/branding-designs/Roclle-staionory-Mockup/Rocelle_Logo_Mockup_1.jpg' },
            { detailPathImages: 'portfolio/branding-designs/Roclle-staionory-Mockup/Rocelle-latter-haed-mockups.jpg' },
            { detailPathImages: 'portfolio/branding-designs/Roclle-staionory-Mockup/Rocelle-visiting-card-mockups-2.jpg' },
            { detailPathImages: 'portfolio/branding-designs/Roclle-staionory-Mockup/roccelle-shoping-bag-mockups.jpg' },
            { detailPathImages: 'portfolio/branding-designs/Roclle-staionory-Mockup/roccelle-shoping-bag-mockups-2.jpg' },
          ],
        },
        {
          id: 6,
          path: 'portfolio/branding-designs/Shadow-Stationory-mockup/shadow-Stationary_Mockup.jpg',
          detailImages: [
            { detailPathImages: 'portfolio/branding-designs/Shadow-Stationory-mockup/Shadow-logo-1-mockups.jpg' },
            { detailPathImages: 'portfolio/branding-designs/Shadow-Stationory-mockup/Shadow-logo-2-mockups.jpg' },
          ],
        },
        {
          id: 7,
          path: 'portfolio/branding-designs/umer-clinic-Stationory/umer-clinic-stationory.jpg',
          detailImages: [
            { detailPathImages: 'portfolio/branding-designs/umer-clinic-Stationory/umer-clinic-logo-mockups.jpg' },
            { detailPathImages: 'portfolio/branding-designs/umer-clinic-Stationory/id-card-band.jpg' },
            { detailPathImages: 'portfolio/branding-designs/umer-clinic-Stationory/employ-card-mockup.jpg' },
          ],
        }
      ],
      categoryHeading: 'Branding designs',
    },
    {
      name: 'Billboards',
      images: [
        { id: 13, path: 'portfolio/billboards/billboard-1.jpg' },
        { id: 14, path: 'portfolio/billboards/billboard-2.jpg' },
        { id: 15, path: 'portfolio/billboards/billboard-3.jpg' },
        { id: 15, path: 'portfolio/billboards/billboard-4.jpg' },
        { id: 15, path: 'portfolio/billboards/billboard-5.jpg' },
        { id: 15, path: 'portfolio/billboards/billboard-6.jpg' },
        { id: 15, path: 'portfolio/billboards/billboard-7.jpg' },
        { id: 15, path: 'portfolio/billboards/billboard-8.jpg' },
        { id: 15, path: 'portfolio/billboards/billboard-9.jpg' },
        { id: 15, path: 'portfolio/billboards/billboard-10.jpg' },
      ],
      categoryHeading: 'Billboards',
    },
    {
      name: 'Logos',
      images: [
        {
          id: 16,
          path: 'portfolio/logos/urbay-logo.jpg',
        },
        { id: 17, path: 'portfolio/logos/umer-hospital-logo-mockups.jpg' },
        { id: 18, path: 'portfolio/logos/two-sotuh-vellow-logo.jpg' },
        { id: 19, path: 'portfolio/logos/Shadow-logo-mockups.jpg' },
        { id: 20, path: 'portfolio/logos/Roclle-logo-mockups.jpg' },
        { id: 21, path: 'portfolio/logos/kammarh-logo-mockups.jpg' },
        { id: 22, path: 'portfolio/logos/donna-logo-mockups.jpg' },
        { id: 22, path: 'portfolio/logos/alfredo-tour-mockups.jpg' },
        { id: 22, path: 'portfolio/logos/akamas-logo-mockups.jpg' },
        { id: 22, path: 'portfolio/logos/295j-logo.jpg' },
      ],
      categoryHeading: 'Logos',
    },
    {
      name: 'Thumbnails',
      images: [
        { id: 23, path: 'portfolio/thumbnails/thumbnail-1.jpg' },
        { id: 24, path: 'portfolio/thumbnails/thumbnail-2.jpg' },
        { id: 24, path: 'portfolio/thumbnails/thumbnail-3.jpg' },
        { id: 24, path: 'portfolio/thumbnails/thumbnail-4.jpg' },
        { id: 24, path: 'portfolio/thumbnails/thumbnail-5.jpg' },
        { id: 24, path: 'portfolio/thumbnails/thumbnail-6.jpg' },
        { id: 24, path: 'portfolio/thumbnails/thumbnail-7.jpg' },
        { id: 24, path: 'portfolio/thumbnails/thumbnail-8.jpg' },
        { id: 24, path: 'portfolio/thumbnails/thumbnail-9.jpg' },
        { id: 24, path: 'portfolio/thumbnails/thumbnail-10.jpg' },
        { id: 24, path: 'portfolio/thumbnails/thumbnail-11.jpg' },
        { id: 24, path: 'portfolio/thumbnails/thumbnail-12.jpg' },
      ],
      categoryHeading: 'Thumbnails',
    },
    {
      name: 'Stationory Designs',
      images: [
        { id: 23, path: 'portfolio/Stationory-Design/295j-stationory.jpg' },
        { id: 24, path: 'portfolio/Stationory-Design/kammarh-card-mockups.jpg' },
        { id: 24, path: 'portfolio/Stationory-Design/nishi.jpg' },
        { id: 24, path: 'portfolio/Stationory-Design/nuchi-shirt-visiting-card.jpg' },
        { id: 24, path: 'portfolio/Stationory-Design/roclle-laatter-head.jpg' },
        { id: 24, path: 'portfolio/Stationory-Design/Roclle-visiting-card-mockups.jpg' },
        { id: 24, path: 'portfolio/Stationory-Design/two-sotuh-vellow-stationorey.jpg' },
        { id: 24, path: 'portfolio/Stationory-Design/Untitled-1.jpg' },
        { id: 24, path: 'portfolio/Stationory-Design/Untitled-2.jpg' },
        { id: 24, path: 'portfolio/Stationory-Design/Untitled-3.jpg' },
        { id: 24, path: 'portfolio/Stationory-Design/Untitled-4.jpg' },
        { id: 24, path: 'portfolio/Stationory-Design/Untitled-5.jpg' },
        { id: 24, path: 'portfolio/Stationory-Design/Untitled-6.jpg' },
        { id: 24, path: 'portfolio/Stationory-Design/Untitled-7.jpg' },
        { id: 24, path: 'portfolio/Stationory-Design/Untitled-8.jpg' },
        { id: 24, path: 'portfolio/Stationory-Design/urbay-satationorey.jpg' },
      ],
      categoryHeading: 'Stationory Design',
    },
        {
      name: 'Social Media Posts',
      images: [
        { id: 23, path: 'portfolio/social-media-posts/s1.jpg' },
        { id: 23, path: 'portfolio/social-media-posts/s2.jpg' },
        { id: 23, path: 'portfolio/social-media-posts/s3.jpg' },
        { id: 23, path: 'portfolio/social-media-posts/s4.jpg' },
        { id: 23, path: 'portfolio/social-media-posts/s5.jpg' },
        { id: 23, path: 'portfolio/social-media-posts/s6.jpg' },
        { id: 23, path: 'portfolio/social-media-posts/ss1.jpg' },
        { id: 23, path: 'portfolio/social-media-posts/ss2.jpg' },
        { id: 23, path: 'portfolio/social-media-posts/ss3.jpg' },
        { id: 23, path: 'portfolio/social-media-posts/ss4.jpg' },
        { id: 23, path: 'portfolio/social-media-posts/ss5.jpg' },
        { id: 23, path: 'portfolio/social-media-posts/ss6.jpg' },
        { id: 23, path: 'portfolio/social-media-posts/ss7.jpg' },
        { id: 23, path: 'portfolio/social-media-posts/ss8.jpg' },
        { id: 23, path: 'portfolio/social-media-posts/ss9.jpg' },
        { id: 23, path: 'portfolio/social-media-posts/ss10.jpg' },
        { id: 23, path: 'portfolio/social-media-posts/ss11.jpg' },
        { id: 23, path: 'portfolio/social-media-posts/ss12.jpg' },
      ],
      categoryHeading: 'Social Media Posts',
    },
  ];

  currentCategory: any = this.categories[0];
  name: string = `${this.categories[0].name}`;
  select(selectVal: string) {
    for (let i = 0; i < this.categories.length; i++) {
      let token = this.categories[i].name.includes(selectVal)
      if (token === true) {
        this.showCategory(this.categories[i])
      }
    }
  }
  ngOnInit(): void {
    const savedCategory = this.categories.find(category => category.categoryHeading === this.service.currentCategoryHeading);
    if(savedCategory){
      this.showCategory(savedCategory);
    }
  }

  showCategory(category: any) {
    this.loading = true;
    this.currentCategory = category;
    this.service.currentCategoryHeading = category.categoryHeading
    setTimeout(() => {
      this.loading = false;
    }, 500);
  }

  gotoDetails(image: any, i:any) {
    const id = image.id;
    const detailImages = image.detailImages;
    const bgImage = image.path;
    const selected = {
      ...image,
      category: this.currentCategory.images,
      index: i 
    };
    console.warn(selected);
    this.router.navigate(['portfolioDetails', id], {
      state: {
        images: detailImages,
        bgImage,
        selected
      },
    });
  }
  
  public  goback(): void {
    this.router.navigate(['portfolio']);
  }

}
