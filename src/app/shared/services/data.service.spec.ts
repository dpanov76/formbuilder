import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './data.service';

describe('DataService', () => {

  let dataService: DataService;
  let httpMock: HttpTestingController;
  let url: string;
  const mockDummyData = [{id: 1}, {id: 2}];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        HttpClientTestingModule,
      ],
      providers: [
        DataService
      ]
    });

    dataService = TestBed.get(DataService);
    httpMock = TestBed.get(HttpTestingController);
    url = dataService.generateUrl('test');
  });



  it('should be created', () => {
    expect(dataService).toBeTruthy();
  });
  it('should fetch the data', () => {
    const urls = dataService.generateUrl('something');
    dataService.fetch('something').subscribe(data => {
      expect(data.length).toBe(2);
      expect(data).toEqual(mockDummyData);
    });
    const mockReq = httpMock.expectOne(urls);
    expect(mockReq.request.method).toBe('GET');
    expect(mockReq.request.responseType).toEqual('json');
    mockReq.flush(mockDummyData);
    httpMock.verify();
  });
  it('should post data', () => {
    const urls = dataService.generateUrl('something');
    dataService.submitData('something', mockDummyData).subscribe(() => {
    });
    const mockReq = httpMock.expectOne(urls);
    expect(mockReq.request.method).toBe('POST');
    expect(mockReq.request.responseType).toEqual('json');
    mockReq.flush(mockDummyData);
    httpMock.verify();
  });
});
