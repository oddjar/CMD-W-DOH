
// Register for the beforeload events. The beforeload event fires for all sub-resources
// (scripts, stylesheets, iframes, images, plug-ins, etc.)
window.addEventListener("beforeunload", handleBeforeUnloadEvent, true);

function handleBeforeUnloadEvent(event)
{
	// Call up to the global page using the special canLoad function. This sends a
	// synchronous message event, so it blocks while waiting for an answer.
	// If canLoad returns true return early, allowing the load to occur.
	
	if (safari.self.tab.canLoad(event, { url: document.URL})) {
		return "(Remove or modify this warning with the CMD-W DOH extension).";
	}
}
