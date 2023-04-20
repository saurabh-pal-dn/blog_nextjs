import { PostType } from './post';
import { PostTypeCategory } from './postTypeCategories';

export interface MetaProps
  extends Pick<PostType, 'date' | 'description' | 'image' | 'title'> {
  /**
   * For the meta tag `og:type`
   */
  type?: PostTypeCategory;
}
