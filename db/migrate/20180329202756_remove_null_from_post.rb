class RemoveNullFromPost < ActiveRecord::Migration[5.1]
  def change
    change_column :posts, :body, :string, :null => true
  end
end
