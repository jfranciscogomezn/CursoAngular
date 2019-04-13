import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser"
import {AppComponent} from "./app.component";
import {FormsModule} from "@angular/forms";


@NgModule({
    imports:[BrowserModule,FormsModule],
    bootstrap:[AppComponent],
    declarations:[AppComponent]
})
export class AppModule{

}
