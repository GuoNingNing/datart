/**
 * Datart
 *
 * Copyright 2021
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { InteractionAction, InteractionCategory } from '../../constants';

export type VizType = {
  relId: string;
  name: string;
  relType: string;
};

export type I18nTransator = {
  translate: (title: string, disablePrefix?: boolean, options?: any) => string;
};

export type JumpToChartRule = {
  relId: string;
  relation: InteractionFieldRelation;
  [InteractionFieldRelation.Customize]: any[];
};

export type InteractionRule = {
  id: string;
  category?: InteractionCategory;
  action?: InteractionAction;

  [InteractionCategory.JumpToChart]?: JumpToChartRule;
  [InteractionCategory.JumpToDashboard]?: any;
  [InteractionCategory.JumpToUrl]?: any;
};
