class RemoveNullFromFriends < ActiveRecord::Migration[5.1]
  def change
    change_column :friends, :pending, :boolean, :null => true
  end
end
