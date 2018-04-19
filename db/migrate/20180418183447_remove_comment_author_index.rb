class RemoveCommentAuthorIndex < ActiveRecord::Migration[5.1]
  def change
    remove_index :comments, :author_id
  end
end
