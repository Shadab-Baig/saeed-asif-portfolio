import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonServiceService } from 'src/app/services/common-service.service';

@Component({
  selector: 'app-ui-ux',
  templateUrl: './ui-ux.component.html',
  styleUrls: ['./ui-ux.component.scss']
})
export class UIUXComponent implements OnInit {


  public loading = false;
  constructor(private router: Router , private service:CommonServiceService) { }

  public categories = [
    {
      name: 'Web Images',
      images: [
        {
          id: 26,
          path: 'portfolio/branding-designs/Akkamas-Sationory-Mockup/Akkamas-Staionory-Mockups.jpg',
          detailImages: [
            { detailPathImages: 'portfolio/branding-designs/Akkamas-Sationory-Mockup/akamas-t-shirts-mockups.jpg' },
            { detailPathImages: 'portfolio/branding-designs/Akkamas-Sationory-Mockup/akamas-bottel-cap-mockups.jpg' },
            { detailPathImages: 'portfolio/branding-designs/Akkamas-Sationory-Mockup/Akamas_Logo_Mockup_2.jpg' },
            { detailPathImages: 'portfolio/branding-designs/Akkamas-Sationory-Mockup/Akamas_Logo_Mockup_.jpg' },
          ],
        },
        {
          id: 27,
          path: 'portfolio/branding-designs/Alfreedo-tours-mockup/Alfreedo-tours_Stationery_Mockup_2.jpg',
          detailImages: [
            { detailPathImages: 'portfolio/branding-designs/Alfreedo-tours-mockup/Alfreedo tours_Stationery_Mockup_ 1.jpg' },
            { detailPathImages: 'portfolio/branding-designs/Alfreedo-tours-mockup/Alfreedo_Pin_Button_Mockup_1.jpg' },
            { detailPathImages: 'portfolio/branding-designs/Alfreedo-tours-mockup/Alfreedo-tours-logo-mockups.jpg' },
          ],
        },
        {
          id: 28,
          path: 'portfolio/branding-designs/doonaa-sationory-mockups/donna-mockups-sationory.jpg',
          detailImages: [
            { detailPathImages: 'portfolio/branding-designs/doonaa-sationory-mockups/donna_Logo_Mockup_.jpg' },
            { detailPathImages: 'portfolio/branding-designs/doonaa-sationory-mockups/donna-mockups.jpg' },
            { detailPathImages: 'portfolio/branding-designs/doonaa-sationory-mockups/donna-store-with-cups-logo-mockups-2.jpg' },
            { detailPathImages: 'portfolio/branding-designs/doonaa-sationory-mockups/donna-visiting-card-mockups.jpg' },
          ],
        },
        {
          id: 29,
          path: 'portfolio/branding-designs/Kamarah-resturent/kammarah-stationory-mockkups.jpg',
          detailImages: [
            { detailPathImages: 'portfolio/branding-designs/Kamarah-resturent/kammarah-logo-mockkups.jpg' },
            { detailPathImages: 'portfolio/branding-designs/Kamarah-resturent/kammarah-wristband-mockkups-2.jpg' },
            { detailPathImages: 'portfolio/branding-designs/Kamarah-resturent/kammarah-wristband-mockkups.jpg' },
            { detailPathImages: 'portfolio/branding-designs/Kamarah-resturent/kammara-visiting-card-mockups.jpg' },
          ],
        },
        {
          id: 30,
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
          id: 31,
          path: 'portfolio/branding-designs/Shadow-Stationory-mockup/shadow-Stationary_Mockup.jpg',
          detailImages: [
            { detailPathImages: 'portfolio/branding-designs/Shadow-Stationory-mockup/Shadow-logo-1-mockups.jpg' },
            { detailPathImages: 'portfolio/branding-designs/Shadow-Stationory-mockup/Shadow-logo-2-mockups.jpg' },
          ],
        },
        {
          id: 32,
          path: 'portfolio/branding-designs/umer-clinic-Stationory/umer-clinic-stationory.jpg',
          detailImages: [
            { detailPathImages: 'portfolio/branding-designs/umer-clinic-Stationory/umer-clinic-logo-mockups.jpg' },
            { detailPathImages: 'portfolio/branding-designs/umer-clinic-Stationory/id-card-band.jpg' },
            { detailPathImages: 'portfolio/branding-designs/umer-clinic-Stationory/employ-card-mockup.jpg' },
          ],
        }
      ],
      categoryHeading: 'Web Images',
    },
    {
      name: 'Mockups',
      images: [
        { id: 35, path: 'portfolio/billboards/billboard-1.jpg' },
        { id: 35, path: 'portfolio/billboards/billboard-2.jpg' },
        { id: 35, path: 'portfolio/billboards/billboard-3.jpg' },
        { id: 35, path: 'portfolio/billboards/billboard-4.jpg' },
        { id: 35, path: 'portfolio/billboards/billboard-5.jpg' },
        { id: 35, path: 'portfolio/billboards/billboard-6.jpg' },
        { id: 35, path: 'portfolio/billboards/billboard-7.jpg' },
        { id: 35, path: 'portfolio/billboards/billboard-8.jpg' },
        { id: 35, path: 'portfolio/billboards/billboard-9.jpg' },
        { id: 35, path: 'portfolio/billboards/billboard-10.jpg' },
      ],
      categoryHeading: 'Mockups',
    }
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
