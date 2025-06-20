<div class="blog-pagination">
    <?php
    $post_id = get_the_ID(); // 현재 포스트 ID
    $categories = get_the_category($post_id); // 현재 포스트의 카테고리 가져오기
    $current_post_type = get_post_type($post_id);

    if (!empty($categories)) {
        $category_id = $categories[0]->term_id; // 첫 번째 카테고리 ID 가져오기

        $args = array(
            'post_type' => $current_post_type,
            'orderby'  => 'post_date',
            'order'    => 'DESC',
            'posts_per_page' => -1,
            'category__in' => array($category_id), // 현재 글의 카테고리로 제한
        );

        $posts = get_posts($args);

        // 가져온 포스트들의 ID 배열
        $ids = wp_list_pluck($posts, 'ID');

        // 현재 포스트의 위치 찾기
        $thisindex = array_search($post_id, $ids);
        $previd    = isset($ids[$thisindex - 1]) ? $ids[$thisindex - 1] : null;
        $nextid    = isset($ids[$thisindex + 1]) ? $ids[$thisindex + 1] : null;

        if ($previd) {
    ?>
            <span class="prev-link">
                <a class="lo-hover-left" rel="prev" href="<?php echo get_permalink($previd); ?>">
                    <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.292893 7.29289C-0.0976311 7.68342 -0.0976311 8.31658 0.292893 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292893 7.29289ZM22 7L1 7L1 9L22 9L22 7Z" fill="currentColor" />
                    </svg>Prev
                </a>
            </span>
        <?php
        }

        if ($nextid) {
        ?>
            <span class="next-link">
                <a class="lo-hover-right" rel="next" href="<?php echo get_permalink($nextid); ?>">
                    Next
                    <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.7071 8.70711C22.0976 8.31658 22.0976 7.68342 21.7071 7.29289L15.3431 0.928932C14.9526 0.538408 14.3195 0.538408 13.9289 0.928932C13.5384 1.31946 13.5384 1.95262 13.9289 2.34315L19.5858 8L13.9289 13.6569C13.5384 14.0474 13.5384 14.6805 13.9289 15.0711C14.3195 15.4616 14.9526 15.4616 15.3431 15.0711L21.7071 8.70711ZM0 9L21 9L21 7L0 7L0 9Z" fill="currentColor" />
                    </svg>
                </a>
            </span>
    <?php
        }
    }
    ?>
</div>