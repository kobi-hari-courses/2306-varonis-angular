import { Injectable } from '@angular/core';
import { ALL_COLORS } from '../data/color-names';
import { Color } from '../models/color.model';
import { Observable, delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ColorsService {
  constructor() {}

  async search(keyword: string): Promise<Color[]> {
    keyword = keyword.toLowerCase();
    console.log('starting search ', keyword);
    if (!keyword) return [];
    const results = ALL_COLORS.filter((c) =>
      c.name.toLowerCase().includes(keyword)
    );

    await new Promise(res => setTimeout(res, 3000));

    console.log('completed search ', keyword);
    return results;
  }
}
