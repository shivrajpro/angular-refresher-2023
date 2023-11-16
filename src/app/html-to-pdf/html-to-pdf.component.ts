import { Component, ElementRef, ViewChild } from '@angular/core';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import * as Highcharts from 'highcharts';
@Component({
  selector: 'app-html-to-pdf',
  templateUrl: './html-to-pdf.component.html',
  styleUrls: ['./html-to-pdf.component.scss']
})
export class HtmlToPdfComponent {
  @ViewChild('screen') screen!: ElementRef;
  @ViewChild('canvas') canvas!: ElementRef;
  @ViewChild('downloadLink') downloadLink!: ElementRef;
  title = 'html-to-pdf-angular-application';
  Highcharts: typeof Highcharts = Highcharts;

  chartOptions: Highcharts.Options = {
    series: [
      {
        type: 'line',
        data: [1, 2, 3, 4, 5],
      },
    ],
  };
  convetToPDF() {
    var data = document.getElementById('contentToConvert') as HTMLElement;
    html2canvas(data).then(canvas => {
      // Few necessary setting options
      var imgWidth = 208;
      var pageHeight = 295;
      var imgHeight = canvas.height * imgWidth / canvas.width;
      var heightLeft = imgHeight;

      const contentDataURL = canvas.toDataURL('image/png')
      let pdf = new jsPDF('p', 'mm', 'a4'); // A4 size page of PDF
      var position = 0;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
      pdf.save('test.pdf'); // Generated PDF
    });
  }

  convetToImg() {
    html2canvas(this.screen.nativeElement).then(canvas => {
      this.canvas.nativeElement.src = canvas.toDataURL();
      this.downloadLink.nativeElement.href = canvas.toDataURL('image/png');
      this.downloadLink.nativeElement.download = 'test.png';
      this.downloadLink.nativeElement.click();
    });

  }
}
