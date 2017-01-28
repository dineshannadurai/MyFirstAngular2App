import { Component } from '@angular/core';

@Component({
  moduleId:module.id,
  selector: 'about',
  templateUrl: 'about.component.html',
  styleUrls: ['about.component.css']
})

export class AboutComponent  {
    private thumbnails = new Array(5);
    private quadrants:Array<any> = [
        {d:"M 19 12 A 13 13 0 0 1 32 25 L 19 25 Z",fill:"none",stroke:"none",id:"tr"},
        {d:"M 19 12 A 13 13 0 0 0 6 25 L 19 25 Z",fill:"none",stroke:"none",id:"tl"},
        {d:"M 19 38 A 13 13 0 0 1 6 25 L 19 25 Z",fill:"none",stroke:"none",id:"bl"},
        {d:"M 19 38 A 13 13 0 0 0 32 25 L 19 25 Z",fill:"none",stroke:"none",id:"br"}
    ];
    private paths:Array<any> = [
        {d:"M 19 12 19,38",fill:"none",stroke:"black",strokewidth:"2"},
        {d:"M6,25 L32,25",fill:"none",stroke:"black",strokewidth:"2"},
        {d:"M32 25 C 34 6, 34 6, 19 12",fill:"none",stroke:"black",strokewidth:"2"}
    ]
    public circle:any = {
        x:"19",
        y:"25",
        r:"13",
        fill:"transparent",
        strokewidth:"2",
        stroke:"black"
    };
}
