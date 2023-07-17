import { Component } from '@angular/core';
import { BannerAuth } from '../../schema/banner-auth';

@Component({
  selector: 'app-banner-auth',
  templateUrl: './banner-auth.component.html',
  styleUrls: ['./banner-auth.component.scss']
})
export class BannerAuthComponent {

    banners: BannerAuth[] = [
        {
            id: 1,
            title: "Manage Task Easily & Efficiently",
            image: 'assets/img/banner_auth_1.svg',
            subtitle: 'Increase employee productivity and performance in a measurable and precision system in one application.',
            active: true
        },
        {
            id: 2,
            title: "Communication Is Key",
            image: 'assets/img/banner_auth_2.svg',
            subtitle: 'Connect with your coworkers anywhere like you are in one workspace. Very simple and fast.',
            active: false
        },
        {
            id: 3,
            title: "Employee Self-Service",
            image: 'assets/img/banner_auth_3.svg',
            subtitle: 'Simplify the administrative affairs of the company where you work wherever and whenever. Let`s get started with all these conveniences',
            active: false
        }
    ];

    constructor() {}

    onBanner(banner: BannerAuth) {
        this.banners.forEach((items,index) => {
            items.active = false;
            if (items === banner) {
                items.active = true;
            }
        });
    }

}
