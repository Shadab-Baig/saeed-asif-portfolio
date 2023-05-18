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
          path: 'portfolio/branding-designs/Bifit-Gym/bifit-gym-branding-min.jpg',
          detailImages: [
            { detailPathImages: 'portfolio/branding-designs/Bifit-Gym/Mockup-1-min.jpg' },
            { detailPathImages: 'portfolio/branding-designs/Bifit-Gym/bifit-gym-logo-2.jpg' },
            { detailPathImages: 'portfolio/branding-designs/Bifit-Gym/bifit-gym-logo-min.jpg' },
            { detailPathImages: 'portfolio/branding-designs/Bifit-Gym/t-shirt-Mockup-1.jpg' },
          ],
        },
        {
          id: 2,
          path: 'portfolio/branding-designs/Brick-Lane/Stationery_Mockup-min.jpg',
          detailImages: [
            { detailPathImages: 'portfolio/branding-designs/Brick-Lane/brik-lane-raelty.jpg' },
            { detailPathImages: 'portfolio/branding-designs/Brick-Lane/brik-lane-raelty-2.jpg' },
            { detailPathImages: 'portfolio/branding-designs/Brick-Lane/CUP_Mockup.jpg' },
            { detailPathImages: 'portfolio/branding-designs/Brick-Lane/Coffee_Cup_Mockup_2-min.jpg' },
            { detailPathImages: 'portfolio/branding-designs/Brick-Lane/Beach_Chair_Mockup_1-min.jpg' },
          ],
        },
        {
          id: 3,
          path: 'portfolio/branding-designs/fitness-hub/fitness-gym-branding-min.jpg',
          detailImages: [
            { detailPathImages: 'portfolio/branding-designs/fitness-hub/logo-02.png' },
            { detailPathImages: 'portfolio/branding-designs/fitness-hub/logo-2.png' },
            { detailPathImages: 'portfolio/branding-designs/fitness-hub/fitness-jim-gym-branding-3.jpg' },
            { detailPathImages: 'portfolio/branding-designs/fitness-hub/fitness-gym-branding-2-min.jpg' },
          ],
        },
        {
          id: 4,
          path: 'portfolio/branding-designs/Grand-Rapid-store/Stationery_Mockup_1-min.jpg',
          detailImages: [
            { detailPathImages: 'portfolio/branding-designs/Grand-Rapid-store/Stationery_Mockup_2-min.jpg' },
            { detailPathImages: 'portfolio/branding-designs/Grand-Rapid-store/brand-rappide-logo-min.jpg' },
            { detailPathImages: 'portfolio/branding-designs/Grand-Rapid-store/brand-rappide-logo-2-min.jpg' },
            { detailPathImages: 'portfolio/branding-designs/Grand-Rapid-store/Gift_Bag_Mockup_1.jpg' },
          ],
        },
        {
          id: 5,
          path: 'portfolio/branding-designs/Larke-home/Stationery_Mockup_1.jpg',
          detailImages: [
            { detailPathImages: 'portfolio/branding-designs/Larke-home/Stationery_Mockup_2-min-1.jpg' },
            { detailPathImages: 'portfolio/branding-designs/Larke-home/Stationery_Mockup_3-min.jpg' },
            { detailPathImages: 'portfolio/branding-designs/Larke-home/larke-home-min.jpg' },
            { detailPathImages: 'portfolio/branding-designs/Larke-home/larke-home-2-min.jpg' },
          ],
        },
        {
          id: 6,
          path: 'portfolio/branding-designs/Pie-Solution/pie-solution-mockupa-min.jpg',
          detailImages: [
            { detailPathImages: 'portfolio/branding-designs/Pie-Solution/pie-solution-mockupa-2-min.jpg' },
            { detailPathImages: 'portfolio/branding-designs/Pie-Solution/pie-solution-mockupa-1-min.jpg' },
            { detailPathImages: 'portfolio/branding-designs/Pie-Solution/pie-solutions-min.jpg' },
            { detailPathImages: 'portfolio/branding-designs/Pie-Solution/pie-solutions-2-min.jpg' },
          ],
        },
        {
          id: 7,
          path: 'portfolio/branding-designs/Seven-six-resturent/seven-six-resturent-branding-min.jpg',
          detailImages: [
            { detailPathImages: 'portfolio/branding-designs/Seven-six-resturent/seven-six-resturent-min-1.jpg' },
            { detailPathImages: 'portfolio/branding-designs/Seven-six-resturent/seven-six-resturent-min.jpg' },
            { detailPathImages: 'portfolio/branding-designs/Seven-six-resturent/seven-six_resturent-2-min.jpg' },
            { detailPathImages: 'portfolio/branding-designs/Seven-six-resturent/Paper_Bag_Mockup_2.jpg' },
          ],
        },
        {
          id: 8,
          path: 'portfolio/branding-designs/slice-of-spice/slice-of-spice-branding.jpg',
          detailImages: [
            { detailPathImages: 'portfolio/branding-designs/slice-of-spice/slice-of-spice-branding-2-min.jpg' },
            { detailPathImages: 'portfolio/branding-designs/slice-of-spice/slice-of-spice-branding-3-min.jpg' },
            { detailPathImages: 'portfolio/branding-designs/slice-of-spice/slice-of-spice-Mockup-3-min.jpg' },
            { detailPathImages: 'portfolio/branding-designs/slice-of-spice/slice-of-spice-Mockup-min.jpg' },
          ],
        },
        {
          id: 9,
          path: 'portfolio/branding-designs/sniper-stodio/sniper-stodio-branding-min.jpg',
          detailImages: [
            { detailPathImages: 'portfolio/branding-designs/sniper-stodio/sniper-logo-Mockups-min.jpg' },
            { detailPathImages: 'portfolio/branding-designs/sniper-stodio/cup.jpg' },
            { detailPathImages: 'portfolio/branding-designs/sniper-stodio/cup-2.jpg' },
            { detailPathImages: 'portfolio/branding-designs/sniper-stodio/Free_Logo_Mockup_4-min.jpg' },
            { detailPathImages: 'portfolio/branding-designs/sniper-stodio/sniper-stodiou-3-min.jpg' },
          ],
        },
        {
          id: 10,
          path: 'portfolio/branding-designs/Softex-logo/softex-stationory-mockup.jpg',
          detailImages: [
            { detailPathImages: 'portfolio/branding-designs/Softex-logo/sotex-stationory-min.jpg' },
            { detailPathImages: 'portfolio/branding-designs/Softex-logo/softex-logo-min.jpg' },
            { detailPathImages: 'portfolio/branding-designs/Softex-logo/_Pen_Mockup_2.jpg' },
            { detailPathImages: 'portfolio/branding-designs/Softex-logo/_Pen_Mockup_1.jpg' },
          ],
        },
        {
          id: 11,
          path: 'portfolio/branding-designs/spin-the-paint/spin-the-paint-branding.jpg',
          detailImages: [
            { detailPathImages: 'portfolio/branding-designs/spin-the-paint/spin-the-paint-branding-card-min.jpg' },
            { detailPathImages: 'portfolio/branding-designs/spin-the-paint/spin-the-paint-Mockups-3-min.jpg' },
            { detailPathImages: 'portfolio/branding-designs/spin-the-paint/spin-the-paint-Mockups-min.jpg' },
          ],
        },
        {
          id: 12,
          path: 'portfolio/branding-designs/Sports-big/Stationery_Mockup_1-sports-big.jpg',
          detailImages: [
            { detailPathImages: 'portfolio/branding-designs/Sports-big/fitness-logo-2-02-min.jpg' },
            { detailPathImages: 'portfolio/branding-designs/Sports-big/_Box_3-min.jpg' },
            { detailPathImages: 'portfolio/branding-designs/Sports-big/_Box_2-min.jpg' },
            { detailPathImages: 'portfolio/branding-designs/Sports-big/_Box_1-min.jpg' },
            { detailPathImages: 'portfolio/branding-designs/Sports-big/Sports-logo-Mockup-min.jpg' },
          ],
        },
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
        { id: 24, path: 'portfolio/Stationory-Design/seven-six-resturent-branding-min.jpg' },
        { id: 24, path: 'portfolio/Stationory-Design/pie-solution-mockupa-min.jpg' },
        { id: 24, path: 'portfolio/Stationory-Design/nuchi-shirt-visiting-card.jpg' },
        { id: 24, path: 'portfolio/Stationory-Design/roclle-laatter-head.jpg' },
        { id: 24, path: 'portfolio/Stationory-Design/Stationery_Mockup_1-min.jpg' },
        { id: 24, path: 'portfolio/Stationory-Design/fitness-gym-branding-min.jpg' },
        { id: 24, path: 'portfolio/Stationory-Design/Stationery_Mockup-min.jpg' },
        { id: 24, path: 'portfolio/Stationory-Design/Roclle-visiting-card-mockups.jpg' },
        { id: 24, path: 'portfolio/Stationory-Design/two-sotuh-vellow-stationorey.jpg' },
        { id: 24, path: 'portfolio/Stationory-Design/spin-the-paint-branding.jpg' },
        { id: 24, path: 'portfolio/Stationory-Design/slice-of-spice-branding.jpg' },
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
        { id: 23, path: 'portfolio/social-media-posts/fitness-jim-posts.jpg' },
        { id: 23, path: 'portfolio/social-media-posts/gaming-posts-1.jpg' },
        { id: 23, path: 'portfolio/social-media-posts/photo-studio-sniper-post.jpg' },
        { id: 23, path: 'portfolio/social-media-posts/ss1.jpg' },
        { id: 23, path: 'portfolio/social-media-posts/ss2.jpg' },
        { id: 23, path: 'portfolio/social-media-posts/ss3.jpg' },
        { id: 23, path: 'portfolio/social-media-posts/Real-estate-posts.jpg' },
        { id: 23, path: 'portfolio/social-media-posts/resturenst-posts.jpg' },
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
      selectedCategory:this.currentCategory,
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
