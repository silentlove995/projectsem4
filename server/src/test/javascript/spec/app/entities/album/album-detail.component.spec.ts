import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { ServerTestModule } from '../../../test.module';
import { AlbumDetailComponent } from 'app/entities/album/album-detail.component';
import { Album } from 'app/shared/model/album.model';

describe('Component Tests', () => {
  describe('Album Management Detail Component', () => {
    let comp: AlbumDetailComponent;
    let fixture: ComponentFixture<AlbumDetailComponent>;
    const route = ({ data: of({ album: new Album(123) }) } as any) as ActivatedRoute;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [ServerTestModule],
        declarations: [AlbumDetailComponent],
        providers: [{ provide: ActivatedRoute, useValue: route }]
      })
        .overrideTemplate(AlbumDetailComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(AlbumDetailComponent);
      comp = fixture.componentInstance;
    });

    describe('OnInit', () => {
      it('Should load album on init', () => {
        // WHEN
        comp.ngOnInit();

        // THEN
        expect(comp.album).toEqual(jasmine.objectContaining({ id: 123 }));
      });
    });
  });
});
