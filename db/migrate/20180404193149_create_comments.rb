
class CreateComments < ActiveRecord::Migration[5.1]
  def change
    create_table :comments do |t|
      t.string :body, null: false
      t.string :author_id, null: false
      t.string :post_id, null: false
      t.string :parent_comment_id

      t.timestamps
    end

  add_index :comments, :author_id, unique: true
  end
end
