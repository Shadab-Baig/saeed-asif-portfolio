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
      name: 'Mockups',
      images: [
        { id: 35,thumbnailImage:'portfolio/mockups/Anymal-thumbnail.jpg', path: 'portfolio/mockups/Anymal-min.jpg',webUrl:'https://anymal.com/' },
        { id: 36,thumbnailImage:'portfolio/mockups/ARNOLD-ANDRE-thumbnail.jpg', path: 'portfolio/mockups/Arnold-andre-2-min.jpg',webUrl:'https://www.arnoldandres.com/' },
        { id: 36,thumbnailImage:'portfolio/mockups/Dragon-Racing-thumbnail.jpg', path: 'portfolio/mockups/Dragon-racing-3-min.jpg',webUrl:'https://www.dragonracing88.com/' },
        { id: 36,thumbnailImage:'portfolio/mockups/Dubai-Autodrome-thumbnail.jpg', path: 'portfolio/mockups/Dubai-autodrome-4-min.jpg',webUrl:'https://www.dubaiautodrome.com/' },
        { id: 36,thumbnailImage:'portfolio/mockups/Frollo-thumbnail.jpg', path: 'portfolio/mockups/Frollo-min.jpg',webUrl:'https://www.frollo.us/' },
        { id: 36,thumbnailImage:'portfolio/mockups/Montblanc-thumbnail.jpg', path: 'portfolio/mockups/montblanc-min.jpg' },
        { id: 36,thumbnailImage:'portfolio/mockups/Panera-Bread-thumbnail.jpg', path: 'portfolio/mockups/panera-bread-min.jpg' },
        { id: 36,thumbnailImage:'portfolio/mockups/PostMates-thumbnail.jpg', path: 'portfolio/mockups/Postmates-1-min.jpg' },
        { id: 36,thumbnailImage:'portfolio/mockups/Raiz-thumbnail.jpg', path: 'portfolio/mockups/raiz-invest-min.jpg' },
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
