function ApplicationTabGroup(Window) {
	//create module instance
	var self = Ti.UI.createTabGroup();
	
	//create app tabs
	var win1 = new Window('Zanthia')

	var tab1 = Ti.UI.createTab({
		title: L('home'),
		icon: '/images/KS_nav_ui.png',
		window: win1
	});
	
	win1.containingTab = tab1;
	self.addTab(tab1);
	
	return self;
};

module.exports = ApplicationTabGroup;
