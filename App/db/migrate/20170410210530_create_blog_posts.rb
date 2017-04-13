class CreateBlogPosts < ActiveRecord::Migration[5.0]
  def change
    create_table :blog_posts do |t|
      t.string :title, { null: false }
      t.string :content
      t.integer :user_id, { null: false }

      t.timestamps
    end
  end
end