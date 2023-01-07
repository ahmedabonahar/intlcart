import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StickyNavModule } from 'ng2-sticky-nav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSmartModalModule } from 'ngx-smart-modal';
import { NgxScrollTopModule } from 'ngx-scrolltop';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FormsModule } from '@angular/forms';
import { CountUpModule } from 'ngx-countup';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { AccordionModule } from "ngx-accordion";
import {TabsModule} from 'ngx-tabset';
import { TooltipModule } from 'ng2-tooltip-directive';
import { ParticlesModule } from 'ngx-particle';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PreloaderComponent } from './components/common/preloader/preloader.component';
import { NavbarComponent } from './components/common/navbar/navbar.component';
import { WelcomeComponent } from './components/common/welcome/welcome.component';
import { AboutComponent } from './components/common/about/about.component';
import { StrategyComponent } from './components/common/strategy/strategy.component';
import { WhoWeAreComponent } from './components/common/who-we-are/who-we-are.component';
import { CtaComponent } from './components/common/cta/cta.component';
import { SkillComponent } from './components/common/skill/skill.component';
import { FunfactsComponent } from './components/common/funfacts/funfacts.component';
import { TeamComponent } from './components/common/team/team.component';
import { HowWeWorkComponent } from './components/common/how-we-work/how-we-work.component';
import { ServicesComponent } from './components/common/services/services.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { SubscribeComponent } from './components/common/subscribe/subscribe.component';
import { PartnerComponent } from './components/common/partner/partner.component';
import { BlogComponent } from './components/common/blog/blog.component';
import { FeedbackComponent } from './components/common/feedback/feedback.component';
import { FaqComponent } from './components/common/faq/faq.component';
import { PricingComponent } from './components/common/pricing/pricing.component';
import { WorkComponent } from './components/common/work/work.component';
import { WhyWeDifferentComponent } from './components/common/why-we-different/why-we-different.component';
import { ContactComponent } from './components/common/contact/contact.component';
import { ServicesTwoComponent } from './components/common/services-two/services-two.component';
import { HomeNineComponent } from './components/home-nine/home-nine.component';
import { BlogDetailsComponent } from './components/blog-details/blog-details.component';
import { DemoSidebarComponent } from './components/common/demo-sidebar/demo-sidebar.component';

@NgModule({
    declarations: [
        AppComponent,
        PreloaderComponent,
        NavbarComponent,
        WelcomeComponent,
        AboutComponent,
        StrategyComponent,
        WhoWeAreComponent,
        CtaComponent,
        SkillComponent,
        FunfactsComponent,
        TeamComponent,
        HowWeWorkComponent,
        ServicesComponent,
        FooterComponent,
        SubscribeComponent,
        PartnerComponent,
        BlogComponent,
        FeedbackComponent,
        FaqComponent,
        PricingComponent,
        WorkComponent,
        WhyWeDifferentComponent,
        ContactComponent,
        ServicesTwoComponent,
        HomeNineComponent,
        BlogDetailsComponent,
        DemoSidebarComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        StickyNavModule,
        BrowserAnimationsModule,
        NgxSmartModalModule.forRoot(),
        NgxScrollTopModule,
        CarouselModule,
        FormsModule,
        AccordionModule,
        CountUpModule,
        TabsModule,
        TooltipModule,
        NgxTypedJsModule,
        ParticlesModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
