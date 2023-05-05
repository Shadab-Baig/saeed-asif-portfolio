import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent implements OnInit {
  public loading = false;
  constructor(private router: Router) {}

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
        { id: 13, path: 'portfolio/billboards/Alfreedo-tours banner mockups.jpg' },
        { id: 14, path: 'portfolio/billboards/Billboard_Mockup_1.jpg' },
        { id: 15, path: 'portfolio/billboards/Billboard_Mockup_2.jpg' },
        { id: 15, path: 'portfolio/billboards/Billboard_Mockup_3.jpg' },
        { id: 15, path: 'portfolio/billboards/Billboard_Mockup_4.jpg' },
        { id: 15, path: 'portfolio/billboards/doona-Street_Citylight_Mockup.jpg' },
        { id: 15, path: 'portfolio/billboards/kammarah-banner-mockkups.jpg' },
        { id: 15, path: 'portfolio/billboards/Mock_up_Billboard_1.jpg' },
        { id: 15, path: 'portfolio/billboards/Rocelle-banner-design-mockups.jpg' },
        { id: 15, path: 'portfolio/billboards/Shadow_Billboard_Mockup.jpg' },
      ],
      categoryHeading: 'Billboards',
    },
    {
      name: 'Logos',
      images: [
        {
          id: 16,
          path: 'portfolio/logos/umer-clinic-logo mockups.jpg',
        },
        { id: 17, path: 'portfolio/logos/Shadow-logo-2 mockups.jpg' },
        { id: 18, path: 'portfolio/logos/Rocelle_Logo_Mockup_1.jpg' },
        { id: 19, path: 'portfolio/logos/kammarah-logo mockkups.jpg' },
        { id: 20, path: 'portfolio/logos/donna_Logo_Mockup_.jpg' },
        { id: 21, path: 'portfolio/logos/Alfreedo-tours logo mockups.jpg' },
        { id: 22, path: 'portfolio/logos/Akamas_Logo_Mockup_.jpg' },
      ],
      categoryHeading: 'Logos',
    },
    {
      name: 'T Shirts',
      images: [
        { id: 23, path: 'portfolio/t-shirts/t-shirt-mockup design.jpg' },
        { id: 24, path: 'portfolio/t-shirts/t-shirt-mockup design-2.jpg' },
        { id: 25, path: 'portfolio/t-shirts/t-shirt-mockup design-3.jpg' },
        { id: 26, path: 'portfolio/t-shirts/t-shirt-mockup design-4.jpg' },
        { id: 27, path: 'portfolio/t-shirts/t-shirt-mockup design-5.jpg' },
        { id: 28, path: 'portfolio/t-shirts/t-shirt-mockup design-6.jpg' },
        { id: 29, path: 'portfolio/t-shirts/t-shirt-mockup design-7.jpg' },
        { id: 30, path: 'portfolio/t-shirts/t-shirt-mockup design-8.jpg' },
        { id: 31, path: 'portfolio/t-shirts/t-shirt-mockup design-9.jpg' },
      ],
      categoryHeading: 'T Shirts',
    },
  ];

  currentCategory: any = this.categories[0];

  ngOnInit(): void {}
  showCategory(category: any) {
    this.loading = true;
    setTimeout(() => {
      this.currentCategory = category;
      this.loading = false;
    }, 500);
  }
  gotoDetails(image: any) {
    const id = image.id;
    const detailImages = image.detailImages;
    const bgImage = image.path;
    this.router.navigate(['portfolioDetails', id], {
      state: {
        images: detailImages,
        bgImage,
      },
    });
  }
}
