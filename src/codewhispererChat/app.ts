/*!
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

import { EventEmitter } from 'vscode'
import { ChatController as CwChatController } from '../codewhispererChat/controllers/chat/controller'
import { UIMessageListener } from './view/messages/messageListener'
import { AwsQAppInitContext } from '../awsq/apps/initContext'
import { MessageListener } from '../awsq/messages/messageListener'
import { MessagePublisher } from '../awsq/messages/messagePublisher'
import {
    ChatItemFeedbackMessage,
    ChatItemVotedMessage,
    CopyCodeToClipboard,
    InsertCodeAtCursorPosition,
    PromptMessage,
    StopResponseMessage,
    TabChangedMessage,
    TabClosedMessage,
    TabCreatedMessage,
    TriggerTabIDReceived,
} from './controllers/chat/model'
import { EditorContextCommand, registerCommands } from './commands/registerCommands'

export function init(appContext: AwsQAppInitContext) {
    const cwChatControllerEventEmitters = {
        processPromptChatMessage: new EventEmitter<PromptMessage>(),
        processTabCreatedMessage: new EventEmitter<TabCreatedMessage>(),
        processTabClosedMessage: new EventEmitter<TabClosedMessage>(),
        processTabChangedMessage: new EventEmitter<TabChangedMessage>(),
        processInsertCodeAtCursorPosition: new EventEmitter<InsertCodeAtCursorPosition>(),
        processCopyCodeToClipboard: new EventEmitter<CopyCodeToClipboard>(),
        processContextMenuCommand: new EventEmitter<EditorContextCommand>(),
        processTriggerTabIDReceived: new EventEmitter<TriggerTabIDReceived>(),
        processStopResponseMessage: new EventEmitter<StopResponseMessage>(),
        processChatItemVotedMessage: new EventEmitter<ChatItemVotedMessage>(),
        processChatItemFeedbackMessage: new EventEmitter<ChatItemFeedbackMessage>(),
    }

    const cwChatControllerMessageListeners = {
        processPromptChatMessage: new MessageListener<PromptMessage>(
            cwChatControllerEventEmitters.processPromptChatMessage
        ),
        processTabCreatedMessage: new MessageListener<TabCreatedMessage>(
            cwChatControllerEventEmitters.processTabCreatedMessage
        ),
        processTabClosedMessage: new MessageListener<TabClosedMessage>(
            cwChatControllerEventEmitters.processTabClosedMessage
        ),
        processTabChangedMessage: new MessageListener<TabChangedMessage>(
            cwChatControllerEventEmitters.processTabChangedMessage
        ),
        processInsertCodeAtCursorPosition: new MessageListener<InsertCodeAtCursorPosition>(
            cwChatControllerEventEmitters.processInsertCodeAtCursorPosition
        ),
        processCopyCodeToClipboard: new MessageListener<CopyCodeToClipboard>(
            cwChatControllerEventEmitters.processCopyCodeToClipboard
        ),
        processContextMenuCommand: new MessageListener<EditorContextCommand>(
            cwChatControllerEventEmitters.processContextMenuCommand
        ),
        processTriggerTabIDReceived: new MessageListener<TriggerTabIDReceived>(
            cwChatControllerEventEmitters.processTriggerTabIDReceived
        ),
        processStopResponseMessage: new MessageListener<StopResponseMessage>(
            cwChatControllerEventEmitters.processStopResponseMessage
        ),
        processChatItemVotedMessage: new MessageListener<ChatItemVotedMessage>(
            cwChatControllerEventEmitters.processChatItemVotedMessage
        ),
        processChatItemFeedbackMessage: new MessageListener<ChatItemFeedbackMessage>(
            cwChatControllerEventEmitters.processChatItemFeedbackMessage
        ),
    }

    const cwChatControllerMessagePublishers = {
        processPromptChatMessage: new MessagePublisher<PromptMessage>(
            cwChatControllerEventEmitters.processPromptChatMessage
        ),
        processTabCreatedMessage: new MessagePublisher<TabCreatedMessage>(
            cwChatControllerEventEmitters.processTabCreatedMessage
        ),
        processTabClosedMessage: new MessagePublisher<TabClosedMessage>(
            cwChatControllerEventEmitters.processTabClosedMessage
        ),
        processTabChangedMessage: new MessagePublisher<TabChangedMessage>(
            cwChatControllerEventEmitters.processTabChangedMessage
        ),
        processInsertCodeAtCursorPosition: new MessagePublisher<InsertCodeAtCursorPosition>(
            cwChatControllerEventEmitters.processInsertCodeAtCursorPosition
        ),
        processCopyCodeToClipboard: new MessagePublisher<CopyCodeToClipboard>(
            cwChatControllerEventEmitters.processCopyCodeToClipboard
        ),
        processContextMenuCommand: new MessagePublisher<EditorContextCommand>(
            cwChatControllerEventEmitters.processContextMenuCommand
        ),
        processTriggerTabIDReceived: new MessagePublisher<TriggerTabIDReceived>(
            cwChatControllerEventEmitters.processTriggerTabIDReceived
        ),
        processStopResponseMessage: new MessagePublisher<StopResponseMessage>(
            cwChatControllerEventEmitters.processStopResponseMessage
        ),
        processChatItemVotedMessage: new MessagePublisher<ChatItemVotedMessage>(
            cwChatControllerEventEmitters.processChatItemVotedMessage
        ),
        processChatItemFeedbackMessage: new MessagePublisher<ChatItemFeedbackMessage>(
            cwChatControllerEventEmitters.processChatItemFeedbackMessage
        ),
    }

    new CwChatController(cwChatControllerMessageListeners, appContext.getAppsToWebViewMessagePublisher())

    const cwChatUIInputEventEmitter = new EventEmitter<any>()

    new UIMessageListener({
        chatControllerMessagePublishers: cwChatControllerMessagePublishers,
        webViewMessageListener: new MessageListener<any>(cwChatUIInputEventEmitter),
    })

    appContext.registerWebViewToAppMessagePublisher(new MessagePublisher<any>(cwChatUIInputEventEmitter), 'cwc')

    registerCommands(cwChatControllerMessagePublishers)
}
