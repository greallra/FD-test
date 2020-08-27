
export const getMenuItem = (MenuSections, MenuSectionId, MenuItemId) =>{
     try {
        if(MenuSections.length === 0) {return []}

        const MenuSection = MenuSections.filter((section)=>section.MenuSectionId == MenuSectionId);
        const foundItem = MenuSection[0].MenuItems.find((MenuIt)=>MenuIt.MenuItemId == MenuItemId);
        return foundItem
     } catch (error) {
         return 'couldnt find item';
     }
     
}
