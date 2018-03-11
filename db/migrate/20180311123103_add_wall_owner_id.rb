class AddWallOwnerId < ActiveRecord::Migration[5.1]
  def change
    add_column :posts, :wall_owner_id, :integer
  end
end
